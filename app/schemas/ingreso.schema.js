const Joi = require("joi");

const id = Joi.number().integer();
const fecha = Joi.date();
const fecha1 = Joi.date();
const fecha2 = Joi.date();
const concepto = Joi.string().allow(null, "").max(150);
const descripcion = Joi.string().allow(null, "").max(50);
const tipo = Joi.string().valid("efectivo", "transferencia");
const cuenta = Joi.string().allow(null, "").max(50);
const monto = Joi.number();
const limit = Joi.number().integer();
const offset = Joi.number().integer();
const createIngresoSchema = Joi.object({
  fecha: fecha.required(),
  concepto: concepto.required(),
  descripcion: descripcion.required(),
  monto: monto.required(),
  tipo: tipo.required(),
  cuenta: cuenta,
});

const updateIngresoSchema = Joi.object({
  fecha: fecha,
  concepto: concepto,
  descripcion: descripcion,
  monto: monto,
  tipo: tipo,
  cuenta: cuenta,
});

const getIngresoSchema = Joi.object({
  id: id.required(),
});
const queryIngresoSchema = Joi.object({
  limit,
  offset,
  fecha,
  fecha1, fecha2,
  concepto,
  descripcion,
  monto,
  cuenta,
  tipo,
});
module.exports = {
  createIngresoSchema,
  updateIngresoSchema,
  getIngresoSchema,
  queryIngresoSchema,
};
