const express = require("express");

const egresosController = require("../controllers/egresos.controller");
const validationHandler = require("../middlewares/validator.handler");
const {
  createEgresoSchema,
  getEgresoSchema,
  updateEgresoSchema,
  queryEgresoSchema,
} = require("../schemas/egreso.schema");

const router = express.Router();
const service = new egresosController();

router.get(
  "/",
  validationHandler(queryEgresoSchema, "query"),
  async (req, res, next) => {
    try {
      const { fecha, fecha1, fecha2 } = req.query;
      const egresos = await service.findAll(fecha, fecha1, fecha2);
      res.json(egresos);
    } catch (error) {
      next(error);
    }
  }
);
/*router.get("/", async (req, res, next) => {
  try {
    const egresos = await service.findAll();
    res.json(egresos);
  } catch (error) {
    next(error);
  }
});*/
router.get(
  "/:id",
  validationHandler(getEgresoSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const egreso = await service.findOne(id);
      res.json(egreso);
    } catch (error) {
      next(error);
    }
  }
);
router.post(
  "/",
  validationHandler(createEgresoSchema, "body"),
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
  validationHandler(getEgresoSchema, "params"),
  validationHandler(updateEgresoSchema, "body"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const egreso = await service.update(id, body);
      res.json(egreso);
    } catch (error) {
      next(error);
    }
  }
);
router.delete(
  "/:id",
  validationHandler(getEgresoSchema, "params"),
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
  validationHandler(getEgresoSchema, "params"),
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
