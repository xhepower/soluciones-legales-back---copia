const db = require("../models");
const boom = require("@hapi/boom");
const Concepto = db.conceptos;
const Op = db.Sequelize.Op;
class conceptosController {
  constructor() {}
  // Create and Save a new Tutorial
  async create(data) {
    const newConcepto = await Concepto.create(data);
    return newConcepto;
  }
  async findAll(nombre) {
    var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;
    const rta = await Concepto.findAll({
      where: condition,
      order: [["id", "DESC"]],
    });
    return rta;
  }
  async findByType(tipo) {
    var condition = tipo ? { tipo: { [Op.iLike]: `%${tipo}%` } } : null;
    const rta = await Concepto.findAll({
      where: condition,
      order: [["nombre", "DESC"]],
    });
    return rta;
  }
  /* async findAll(req, res) {
    let nombre = req.body.nombre;
    // var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;
    // const rta = await Concepto.findAll({ where: condition });
    return nombre;
  }*/
  // Find a single Tutorial with an id
  async findOne(id) {
    const concepto = await Concepto.findByPk(id);
    if (!concepto) {
      throw boom.notFound("concepto no encontrado");
    }
    return concepto;
  }
  // Update a Tutorial by the id in the request
  async update(id, changes) {
    const concepto = await this.findOne(id);
    const rta = await concepto.update(changes);
    return rta;
  }
  async delete(id) {
    const concepto = await this.findOne(id);
    await concepto.destroy();
    return { rta: true };
  }
}
module.exports = conceptosController;
