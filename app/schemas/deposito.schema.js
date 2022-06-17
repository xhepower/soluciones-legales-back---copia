const Joi = require("joi");

const id = Joi.number().integer();
const fecha = Joi.date();
const fecha1 = Joi.date();
const fecha2 = Joi.date();
const cuenta = Joi.string().allow(null, "").max(50);
const monto = Joi.number();
const limit = Joi.number().integer();
const offset = Joi.number().integer();
const createDepositoSchema = Joi.object({
  fecha: fecha.required(),
  monto: monto.required(),
  cuenta: cuenta,
});

const updateDepositoSchema = Joi.object({
  fecha: fecha,
  monto: monto,
  cuenta: cuenta,
});

const getDepositoSchema = Joi.object({
  id: id.required(),
});
const queryDepositoSchema = Joi.object({
  limit,
  offset,
  fecha,
  fecha1,
  fecha2,
  monto,
  cuenta,
});
module.exports = {
  createDepositoSchema,
  updateDepositoSchema,
  getDepositoSchema,
  queryDepositoSchema,
};
