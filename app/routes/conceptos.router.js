const express = require("express");

const conceptosController = require("../controllers/conceptos.controller");
const validationHandler = require("../middlewares/validator.handler");
const {
  createConceptoSchema,
  getConceptoSchema,
  updateConceptoSchema,
  queryConceptoSchema,
} = require("../schemas/concepto.schema");

const router = express.Router();
const service = new conceptosController();

router.get(
  "/",
  validationHandler(queryConceptoSchema, "query"),
  async (req, res, next) => {
    try {
      const { nombre } = req.query;
      const conceptos = await service.findAll(nombre);
      res.json(conceptos);
    } catch (error) {
      next(error);
    }
  }
);
/*router.get("/", async (req, res, next) => {
  try {
    const conceptos = await service.findAll();
    res.json(conceptos);
  } catch (error) {
    next(error);
  }
});*/
router.get(
  "/:id",
  validationHandler(getConceptoSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const concepto = await service.findOne(id);
      res.json(concepto);
    } catch (error) {
      next(error);
    }
  }
);
router.post(
  "/",
  validationHandler(createConceptoSchema, "body"),
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
  validationHandler(getConceptoSchema, "params"),
  validationHandler(updateConceptoSchema, "body"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const concepto = await service.update(id, body);
      res.json(concepto);
    } catch (error) {
      next(error);
    }
  }
);
router.delete(
  "/:id",
  validationHandler(getConceptoSchema, "params"),
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
  validationHandler(getConceptoSchema, "params"),
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
