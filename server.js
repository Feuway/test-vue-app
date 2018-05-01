const fs = require('fs');
const path = require('path');
const LRU = require('lru-cache');
const express = require('express');
const compression = require('compression');
const microcache = require('route-cache');
const resolve = file => path.resolve(__dirname, file);
const { createBundleRenderer } = require('vue-server-renderer');
// const multer = require('multer');

const isProd = process.env.NODE_ENV === 'production';
const useMicroCache = process.env.MICRO_CACHE !== 'false';
const serverInfo =
  `express/${require('express/package.json').version} ` +
  `vue-server-renderer/${require('vue-server-renderer/package.json').version}`;

const frontPath = path.resolve('dist');
const templatePath = resolve(frontPath + 'index.html');

const app = express();

const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false, // рекомендуется
  template: templatePath, // (опционально) шаблон страницы
  // clientManifest // (опционально) манифест клиентской сборки
});

// внутри обработчика сервера...
app.get('*', (req, res) => {
  const context = { url: req.url };
  // Нет необходимости передавать приложение здесь, потому что оно автоматически создаётся
  // при выполнении сборки. Теперь наш сервер отделён от нашего приложения Vue!
  renderer.renderToString(context, (err, html) => {
    // обработка ошибок...
    res.end(html)
  })
});



// const port = process.env.PORT || 3000;
// const upload = multer({
//   dest: '/uploads',
// });

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

app.get('/#/', (req, res) => {
  res.sendFile(`${frontPath}/index.html`);
});

// app.post('/uploads', upload.single('file'), (req, res) => {
//   console.log('Upload!!!');
//   res.send(JSON.stringify({ id: 1 }));
// });

app.use(compression());
app.use(express.static(frontPath, {
  etag: false,
  maxage: '365d',
}));
app.listen(port);

// const uri = `http://localhost:${port}`;
// console.log('> Starting node server...');
// console.log(`> Listening at ${uri}\n`);
