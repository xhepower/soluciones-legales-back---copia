const db = require("../models");
const boom = require("@hapi/boom");
const Deposito = db.depositos;
const Op = db.Sequelize.Op;
class depositosController {
  constructor() { }
  // Create and Save a new Tutorial
  async create(data) {
    const newDeposito = await Deposito.create(data);
    return newDeposito;
  }
  async findAll(fecha, fecha1, fecha2) {
    console.log(fecha, fecha1, fecha2)
    // var condition = fecha ? { fecha: fecha } : null;
    var condition
    if (fecha) {
      condition = { fecha: fecha }
    } else {
      if (fecha1) {

        condition = {
          fecha: {
            [Op.between]: [fecha1, fecha2],
          },
        }
      } else {
        condition = null
      }
    }
    console.log(fecha1)

    const rta = await Deposito.findAll({
      where: condition,
      order: [["id", "DESC"]],
    });
    return rta;
  }

  // Find a single Tutorial with an id
  async findOne(id) {
    const deposito = await Deposito.findByPk(id);
    if (!deposito) {
      throw boom.notFound("deposito no encontrado");
    }
    return deposito;
  }
  // find fdate interval
  async findInterval(fecha1, fecha2) {
    //console.log(new Date(fecha));
    var condition = fecha1
      ? {
        fecha: {
          [Op.between]: [fecha1, fecha2],
        },
      }
      : null;
    const rta = await Reporte.findAll({
      where: condition,
      order: [["id", "DESC"]],
    });
    return rta;
  }
  // Update a Tutorial by the id in the request
  async update(id, changes) {
    const deposito = await this.findOne(id);
    const rta = await deposito.update(changes);
    return rta;
  }
  async delete(id) {
    const deposito = await this.findOne(id);
    await deposito.destroy();
    return { rta: true };
  }
}
module.exports = depositosController;
