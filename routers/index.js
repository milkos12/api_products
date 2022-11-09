const express = require('express')
const productsRouter = require('./products.router')


function routerApi(app) {
  const router = express.Router();
  app.use('/app/v1', router);
  router.use('/producs', productsRouter);
}

module.exports = routerApi;
