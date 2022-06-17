const express = require("express");

const depositosController = require("../controllers/depositos.controller");
const validationHandler = require("../middlewares/validator.handler");
const {
  createDepositoSchema,
  getDepositoSchema,
  updateDepositoSchema,
  queryDepositoSchema,
} = require("../schemas/deposito.schema");

const router = express.Router();
const service = new depositosController();

router.get(
  "/",
  validationHandler(queryDepositoSchema, "query"),
  async (req, res, next) => {
    try {
      const { fecha, fecha1, fecha2 } = req.query;
      const depositos = await service.findAll(fecha, fecha1, fecha2);
      res.json(depositos);
    } catch (error) {
      next(error);
    }
  }
);
/*router.get("/", async (req, res, next) => {
  try {
    const depositos = await service.findAll();
    res.json(depositos);
  } catch (error) {
    next(error);
  }
});*/
router.get(
  "/:id",
  validationHandler(getDepositoSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const deposito = await service.findOne(id);
      res.json(deposito);
    } catch (error) {
      next(error);
    }
  }
);
router.post(
  "/",
  validationHandler(createDepositoSchema, "body"),
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
  validationHandler(getDepositoSchema, "params"),
  validationHandler(updateDepositoSchema, "body"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const deposito = await service.update(id, body);
      res.json(deposito);
    } catch (error) {
      next(error);
    }
  }
);
router.delete(
  "/:id",
  validationHandler(getDepositoSchema, "params"),
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
  validationHandler(getDepositoSchema, "params"),
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
