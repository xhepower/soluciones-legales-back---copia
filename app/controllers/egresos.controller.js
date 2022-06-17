const db = require("../models");
const boom = require("@hapi/boom");
const Egreso = db.egresos;
const Op = db.Sequelize.Op;
class egresosController {
  constructor() { }
  // Create and Save a new Tutorial
  async create(data) {
    const newEgreso = await Egreso.create(data);
    return newEgreso;
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

    const rta = await Egreso.findAll({
      where: condition,
      order: [["id", "DESC"]],
    });
    return rta;
  }
  // Find a single Tutorial with an id
  async findOne(id) {
    const egreso = await Egreso.findByPk(id);
    if (!egreso) {
      throw boom.notFound("egreso no encontrado");
    }
    return egreso;
  }
  // Update a Tutorial by the id in the request
  async update(id, changes) {
    const egreso = await this.findOne(id);
    const rta = await egreso.update(changes);
    return rta;
  }
  async delete(id) {
    const egreso = await this.findOne(id);
    await egreso.destroy();
    return { rta: true };
  }
}
module.exports = egresosController;
