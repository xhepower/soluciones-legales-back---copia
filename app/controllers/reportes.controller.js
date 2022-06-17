const db = require("../models");
const boom = require("@hapi/boom");
const Reporte = db.reportes;
const Deposito = db.depositos;
const Op = db.Sequelize.Op;
class reportesController {
  constructor() {}
  // Create and Save a new Tutorial
  async findOneDate(fecha) {
    var condition = fecha ? { fecha: fecha } : null;
    const rta = await Deposito.findAll(fecha);
    return rta;
  }

  /*async findOneDate(fecha) {
    var condition = fecha ? { fecha: fecha } : null;
    const rta = await Reporte.findAll({
      where: condition,
      order: [["id", "DESC"]],
    });
    return rta;
  }*/

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
    const reporte = await this.findOne(id);
    const rta = await reporte.update(changes);
    return rta;
  }
  async delete(id) {
    const reporte = await this.findOne(id);
    await reporte.destroy();
    return { rta: true };
  }
}
module.exports = reportesController;
