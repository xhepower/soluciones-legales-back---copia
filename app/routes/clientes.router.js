const express = require("express");

const clientesController = require("../controllers/clientes.controller");
const validationHandler = require("../middlewares/validator.handler");
const {
  createClienteSchema,
  getClienteSchema,
  updateClienteSchema,
  queryClienteSchema,
} = require("../schemas/cliente.schema");

const router = express.Router();
const service = new clientesController();

router.get(
  "/",
  validationHandler(queryClienteSchema, "query"),
  async (req, res, next) => {
    try {
      const { nombre } = req.query;
      const clientes = await service.findAll(nombre);
      res.json(clientes);
    } catch (error) {
      next(error);
    }
  }
);
/*router.get("/", async (req, res, next) => {
  try {
    const clientes = await service.findAll();
    res.json(clientes);
  } catch (error) {
    next(error);
  }
});*/
router.get(
  "/:id",
  validationHandler(getClienteSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const cliente = await service.findOne(id);
      res.json(cliente);
    } catch (error) {
      next(error);
    }
  }
);
router.post(
  "/",
  validationHandler(createClienteSchema, "body"),
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
  validationHandler(getClienteSchema, "params"),
  validationHandler(updateClienteSchema, "body"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const cliente = await service.update(id, body);
      res.json(cliente);
    } catch (error) {
      next(error);
    }
  }
);
router.delete(
  "/:id",
  validationHandler(getClienteSchema, "params"),
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
  validationHandler(getClienteSchema, "params"),
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
