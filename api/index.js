const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

module.exports = (req, res) => {
  return app(req, res);
};
