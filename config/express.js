const express    = require('express');
const bodyParser = require('body-parser');
const consign    = require('consign');
const cors = require('cors');
const _connectionDbFactory = require('../api/factory/connectionDbFactory');
const _uuid = require('../api/factory/uuidFactory');

module.exports = () => {
  const app = express();

  // SETANDO VARIÁVEIS DA APLICAÇÃO
  app.set('port', process.env.PORT || '3000');

  // MIDDLEWARES
  app.use(express.json());
  app.use(express.urlencoded({extended:true}));
  app.use(cors());
  app.use(_connectionDbFactory());
  app.use(_uuid());

  consign({cwd: 'api'})
    .then('controller')
    .then('route')
    .then('service')
    .then('dao')
    .then('factory')
    .into(app);

  return app;
};