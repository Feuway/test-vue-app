const fs = require("fs");
const path = require("path");
const LRU = require("lru-cache");
const express = require("express");
const compression = require("compression");
const microcache = require("route-cache");
const resolve = file => path.resolve(__dirname, file);
const { createBundleRenderer } = require("vue-server-renderer");
const multer = require('multer');

const isProd = process.env.NODE_ENV === "production";
const isDev = process.env.NODE_ENV === "development";
// const useMicroCache = process.env.MICRO_CACHE !== 'false';
const serverInfo =
  `express/${require("express/package.json").version} ` +
  `vue-server-renderer/${require("vue-server-renderer/package.json").version}`;

const upload = multer({
  dest: resolve('./uploads'),
});
// const dist = resolve("./dist");
const templatePath = "./src/index.template.html";
// const serverBundle = dist + '/vue-ssr-server-bundle.json';
// const clientManifest = require('./dist/vue-ssr-client-manifest.json');

const app = express();

function createRenderer(bundle, options) {
  // https://github.com/vuejs/vue/blob/dev/packages/vue-server-renderer/README.md#why-use-bundlerenderer
  return createBundleRenderer(
    bundle,
    Object.assign(options, {
      // for component caching
      cache: LRU({
        max: 1000,
        maxAge: 1000 * 60 * 15
      }),
      // this is only needed when vue-server-renderer is npm-linked
      basedir: resolve("./dist"),
      // recommended for performance
      runInNewContext: false
    })
  );
}

let renderer;
let readyPromiseDevServer;
if (isProd) {
  // In production: create server renderer using template and built server bundle.
  // The server bundle is generated by vue-ssr-webpack-plugin.
  const template = fs.readFileSync(templatePath, "utf-8");
  const bundle = require("./dist/vue-ssr-server-bundle.json");
  // The client manifests are optional, but it allows the renderer
  // to automatically infer preload/prefetch links and directly add <script>
  // tags for any async chunks used during render, avoiding waterfall requests.
  const clientManifest = require("./dist/vue-ssr-client-manifest.json");
  renderer = createRenderer(bundle, {
    template,
    clientManifest
  });
} else {
  // In development: setup the dev server with watch and hot-reload,
  // and create a new renderer on bundle / index template update.
  readyPromiseDevServer = require("./build/setup-dev-server")(
    app,
    templatePath,
    (bundle, options) => {
      renderer = createRenderer(bundle, options);
    }
  );
}

function render(req, res) {
  const s = Date.now();

  res.setHeader("Content-Type", "text/html");
  res.setHeader("Server", serverInfo);

  const handleError = err => {
    if (err.url) {
      res.redirect(err.url);
    } else if (err.code === 404) {
      res.status(404).end("404 | Page Not Found");
    } else {
      // Render Error Page or Redirect
      res.status(500).end("500 | Internal Server Error");
      console.error(`error during render : ${req.url}`);
      console.error(err.stack);
    }
  };

  const context = {
    title: "Perf-opt",
    url: req.url
  };
  renderer.renderToString(context, (err, html) => {
    if (err) {
      return handleError(err);
    }
    res.end(html);
    if (!isProd) {
      console.log(`whole request: ${Date.now() - s}ms`);
    }
  });
}

const serve = (path, cache) =>
  express.static(resolve(path), {
    maxAge: cache && isProd ? 1000 * 60 * 60 * 24 * 30 : 0
  });

app.use(compression({ threshold: 0 }));
// app.use(favicon('./public/logo-76.png'));
app.use("/dist", serve("./dist", true));
app.use('/public', serve('./public', true));
app.use('/manifest.json', serve('./manifest.json', true));
app.use('/service-worker.js', serve('./dist/service-worker.js'));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("*", isProd ? render : (req, res) => {
    readyPromiseDevServer.then(() => render(req, res));
  }
);

app.post('/uploads', upload.single('file'), (req, res) => {
  console.log('Upload!!!');
  res.send(JSON.stringify({ id: 1 }));
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  const uri = `http://localhost:${port}`;
  if (isDev) {
    readyPromiseDevServer.then(() => {
      console.log("> Starting node server...");
      console.log(`> Listening at ${uri}\n`);
      const opn = require("opn");
      opn(uri);
    });
  }
  console.log(`> Listening at ${uri}\n`);
});
