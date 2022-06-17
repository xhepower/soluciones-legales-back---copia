const express = require("express");

const clientesRouter = require("./clientes.router");
const conceptosRouter = require("./conceptos.router");
const cuentasRouter = require("./cuentas.router");
const ingresosRouter = require("./ingresos.router");
const egresosRouter = require("./egresos.router");
const depositosRouter = require("./depositos.router");
const retirosRouter = require("./retiros.router");
const reportesRouter = require("./reportes.router");
function routerApi(app) {
  const router = express.Router();

  app.use("/api/v1", router);

  router.use("/clientes", clientesRouter);
  router.use("/conceptos", conceptosRouter);
  router.use("/cuentas", cuentasRouter);
  router.use("/ingresos", ingresosRouter);
  router.use("/egresos", egresosRouter);
  router.use("/depositos", depositosRouter);
  router.use("/retiros", retirosRouter);
  router.use("/reportes", reportesRouter);
}

module.exports = routerApi;
