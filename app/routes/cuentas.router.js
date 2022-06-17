const express = require("express");

const cuentasController = require("../controllers/cuentas.controller");
const validationHandler = require("../middlewares/validator.handler");
const {
  createCuentaSchema,
  getCuentaSchema,
  updateCuentaSchema,
  queryCuentaSchema,
} = require("../schemas/cuenta.schema");

const router = express.Router();
const service = new cuentasController();

router.get(
  "/",
  validationHandler(queryCuentaSchema, "query"),
  async (req, res, next) => {
    try {
      const { nombre } = req.query;
      const cuentas = await service.findAll(nombre);
      res.json(cuentas);
    } catch (error) {
      next(error);
    }
  }
);
/*router.get("/", async (req, res, next) => {
  try {
    const cuentas = await service.findAll();
    res.json(cuentas);
  } catch (error) {
    next(error);
  }
});*/
router.get(
  "/:id",
  validationHandler(getCuentaSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const cuenta = await service.findOne(id);
      res.json(cuenta);
    } catch (error) {
      next(error);
    }
  }
);
router.post(
  "/",
  validationHandler(createCuentaSchema, "body"),
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
  validationHandler(getCuentaSchema, "params"),
  validationHandler(updateCuentaSchema, "body"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const cuenta = await service.update(id, body);
      res.json(cuenta);
    } catch (error) {
      next(error);
    }
  }
);
router.delete(
  "/:id",
  validationHandler(getCuentaSchema, "params"),
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
  validationHandler(getCuentaSchema, "params"),
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
