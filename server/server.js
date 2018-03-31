const express = require('express');
const path = require('path');

const frontPath = path.resolve('dist');
const port = 3000;
const app = express();

app.get('/', (req, res) => {
  res.sendFile(`${frontPath}/index.html`);
});
app.use(express.static(frontPath));
app.listen(port);

const uri = `http://localhost:${port}`;
console.log('> Starting node server...');
console.log(`> Listening at ${uri}\n`);
