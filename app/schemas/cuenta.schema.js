const Joi = require("joi");

const id = Joi.number().integer();
const nombre = Joi.string().min(3).max(30);
const tipo = Joi.string().valid("ahorro", "billetera electronica");
const limit = Joi.number().integer();
const offset = Joi.number().integer();
const createCuentaSchema = Joi.object({
  nombre: nombre.required(),
  tipo: tipo.required(),
});

const updateCuentaSchema = Joi.object({
  nombre: nombre,
  tipo: tipo,
});

const getCuentaSchema = Joi.object({
  id: id.required(),
});
const queryCuentaSchema = Joi.object({
  limit,
  offset,
  nombre,
  tipo,
});
module.exports = {
  createCuentaSchema,
  updateCuentaSchema,
  getCuentaSchema,
  queryCuentaSchema,
};
