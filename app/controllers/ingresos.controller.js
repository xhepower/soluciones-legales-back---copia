const db = require("../models");
const boom = require("@hapi/boom");
const Ingreso = db.ingresos;
const Op = db.Sequelize.Op;
class ingresosController {
  constructor() { }
  // Create and Save a new Tutorial
  async create(data) {
    const newIngreso = await Ingreso.create(data);
    return newIngreso;
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

    const rta = await Ingreso.findAll({
      where: condition,
      order: [["id", "DESC"]],
    });
    return rta;
  }

  // Find a single Tutorial with an id
  async findOne(id) {
    const ingreso = await Ingreso.findByPk(id);
    if (!ingreso) {
      throw boom.notFound("ingreso no encontrado");
    }
    return ingreso;
  }
  // Update a Tutorial by the id in the request
  async update(id, changes) {
    const ingreso = await this.findOne(id);
    const rta = await ingreso.update(changes);
    return rta;
  }
  async delete(id) {
    const ingreso = await this.findOne(id);
    await ingreso.destroy();
    return { rta: true };
  }
}
module.exports = ingresosController;
