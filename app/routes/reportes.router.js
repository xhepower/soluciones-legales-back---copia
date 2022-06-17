const express = require("express");

const reportesController = require("../controllers/reportes.controller");
const ingresosController = require("../controllers/ingresos.controller");
const validationHandler = require("../middlewares/validator.handler");

const router = express.Router();
const ingreso = new ingresosController();

router.get("/", async (req, res) => {
  try {
    const { fecha, fecha1, fecha2 } = req.query;
    let data = [];
    if (fecha) {
      //data.push(ingreso.findAll(fecha));
      console.log(ingreso.findAll(fecha));
    }
    if (fecha1) {
    }
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
