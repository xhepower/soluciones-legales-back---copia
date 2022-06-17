const db = require("../models");
const boom = require("@hapi/boom");
const Retiro = db.retiros;
const Op = db.Sequelize.Op;
class retirosController {
  constructor() { }
  // Create and Save a new Tutorial
  async create(data) {
    const newRetiro = await Retiro.create(data);
    return newRetiro;
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

    const rta = await Retiro.findAll({
      where: condition,
      order: [["id", "DESC"]],
    });
    return rta;
  }

  // Find a single Tutorial with an id
  async findOne(id) {
    const retiro = await Retiro.findByPk(id);
    if (!retiro) {
      throw boom.notFound("retiro no encontrado");
    }
    return retiro;
  }
  // Update a Tutorial by the id in the request
  async update(id, changes) {
    const retiro = await this.findOne(id);
    const rta = await retiro.update(changes);
    return rta;
  }
  async delete(id) {
    const retiro = await this.findOne(id);
    await retiro.destroy();
    return { rta: true };
  }
}
module.exports = retirosController;
