const express = require("express");

const retirosController = require("../controllers/retiros.controller");
const validationHandler = require("../middlewares/validator.handler");
const {
  createRetiroSchema,
  getRetiroSchema,
  updateRetiroSchema,
  queryRetiroSchema,
} = require("../schemas/retiro.schema");

const router = express.Router();
const service = new retirosController();

router.get(
  "/",
  validationHandler(queryRetiroSchema, "query"),
  async (req, res, next) => {
    try {
      const { fecha, fecha1, fecha2 } = req.query;
      const retiros = await service.findAll(fecha, fecha1, fecha2);
      res.json(retiros);
    } catch (error) {
      next(error);
    }
  }
);
/*router.get("/", async (req, res, next) => {
  try {
    const retiros = await service.findAll();
    res.json(retiros);
  } catch (error) {
    next(error);
  }
});*/
router.get(
  "/:id",
  validationHandler(getRetiroSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const retiro = await service.findOne(id);
      res.json(retiro);
    } catch (error) {
      next(error);
    }
  }
);
router.post(
  "/",
  validationHandler(createRetiroSchema, "body"),
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
  validationHandler(getRetiroSchema, "params"),
  validationHandler(updateRetiroSchema, "body"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const retiro = await service.update(id, body);
      res.json(retiro);
    } catch (error) {
      next(error);
    }
  }
);
router.delete(
  "/:id",
  validationHandler(getRetiroSchema, "params"),
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
  validationHandler(getRetiroSchema, "params"),
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
