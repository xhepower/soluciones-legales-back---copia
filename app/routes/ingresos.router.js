const express = require("express");

const ingresosController = require("../controllers/ingresos.controller");
const validationHandler = require("../middlewares/validator.handler");
const {
  createIngresoSchema,
  getIngresoSchema,
  updateIngresoSchema,
  queryIngresoSchema,
} = require("../schemas/ingreso.schema");

const router = express.Router();
const service = new ingresosController();

router.get(
  "/",
  validationHandler(queryIngresoSchema, "query"),
  async (req, res, next) => {
    try {
      const { fecha, fecha1, fecha2 } = req.query;
      const ingresos = await service.findAll(fecha, fecha1, fecha2);
      res.json(ingresos);
    } catch (error) {
      next(error);
    }
  }
);
/*router.get("/", async (req, res, next) => {
  try {
    const ingresos = await service.findAll();
    res.json(ingresos);
  } catch (error) {
    next(error);
  }
});*/
router.get(
  "/:id",
  validationHandler(getIngresoSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const ingreso = await service.findOne(id);
      res.json(ingreso);
    } catch (error) {
      next(error);
    }
  }
);
router.post(
  "/",
  validationHandler(createIngresoSchema, "body"),
  async (req, res, next) => {
    try {
      const body = req.body;
      res.status(201).json(await service.create(body));
    } catch (error) {
      next(error);
    }
  }
);
router.patch(
  "/:id",
  validationHandler(getIngresoSchema, "params"),
  validationHandler(updateIngresoSchema, "body"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const ingreso = await service.update(id, body);
      res.json(ingreso);
    } catch (error) {
      next(error);
    }
  }
);
router.delete(
  "/:id",
  validationHandler(getIngresoSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      res.status(200).json(await service.delete(id));
    } catch (error) {
      next(error);
    }
  }
);
router.delete(
  "/:id",
  validationHandler(getIngresoSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      res.status(200).json(await service.delete(id));
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
