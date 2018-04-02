const express = require('express');
const multer = require('multer');
const path = require('path');

const frontPath = path.resolve('dist');
const port = 3000;
const app = express();
const upload = multer({
  dest: '/uploads',
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

app.get('/', (req, res) => {
  res.sendFile(`${frontPath}/index.html`);
});

app.post('/uploads', upload.single('file'), (req, res) => {
  console.log('Upload!!!');
  res.send(JSON.stringify({ id: 1 }));
});

app.use(express.static(frontPath));
app.listen(port);

const uri = `http://localhost:${port}`;
console.log('> Starting node server...');
console.log(`> Listening at ${uri}\n`);
