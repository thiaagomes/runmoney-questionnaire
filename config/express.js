const express    = require('express');
const bodyParser = require('body-parser');
const consign    = require('consign');
const cors = require('cors');

module.exports = () => {
  const app = express();

  // SETANDO VARIÁVEIS DA APLICAÇÃO
  app.set('port', process.env.PORT || '3000');

  // MIDDLEWARES
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}));
  app.use(cors());

  consign({cwd: 'api'})
    .then('controller')
    .then('route')
    .then('service')
    .then('dao')
    .then('factory')
    .into(app);

  return app;
};