const Joi = require("joi");

const id = Joi.number().integer();
const fecha = Joi.date();
const fecha1 = Joi.date();
const fecha2 = Joi.date();
const cuenta = Joi.string().allow(null, "").max(50);
const monto = Joi.number();
const limit = Joi.number().integer();
const offset = Joi.number().integer();
const createRetiroSchema = Joi.object({
  fecha: fecha.required(),
  monto: monto.required(),
  cuenta: cuenta,
});

const updateRetiroSchema = Joi.object({
  fecha: fecha,
  monto: monto,
  cuenta: cuenta,
});

const getRetiroSchema = Joi.object({
  id: id.required(),
});
const queryRetiroSchema = Joi.object({
  limit,
  offset,
  fecha,
  fecha1,
  fecha2,
  monto,
  cuenta,
});
module.exports = {
  createRetiroSchema,
  updateRetiroSchema,
  getRetiroSchema,
  queryRetiroSchema,
};
