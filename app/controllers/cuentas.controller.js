const db = require("../models");
const boom = require("@hapi/boom");
const Cuenta = db.cuentas;
const Op = db.Sequelize.Op;
class cuentasController {
  constructor() {}
  // Create and Save a new Tutorial
  async create(data) {
    const newCuenta = await Cuenta.create(data);
    return newCuenta;
  }
  async findAll(nombre) {
    var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;
    const rta = await Cuenta.findAll({
      where: condition,
      order: [["id", "DESC"]],
    });
    return rta;
  }
  async findByType(tipo) {
    var condition = tipo ? { tipo: { [Op.iLike]: `%${tipo}%` } } : null;
    const rta = await Cuenta.findAll({
      where: condition,
      order: [["nombre", "DESC"]],
    });
    return rta;
  }
  /* async findAll(req, res) {
    let nombre = req.body.nombre;
    // var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;
    // const rta = await Cuenta.findAll({ where: condition });
    return nombre;
  }*/
  // Find a single Tutorial with an id
  async findOne(id) {
    const cuenta = await Cuenta.findByPk(id);
    if (!cuenta) {
      throw boom.notFound("cuenta no encontrado");
    }
    return cuenta;
  }
  // Update a Tutorial by the id in the request
  async update(id, changes) {
    const cuenta = await this.findOne(id);
    const rta = await cuenta.update(changes);
    return rta;
  }
  async delete(id) {
    const cuenta = await this.findOne(id);
    await cuenta.destroy();
    return { rta: true };
  }
}
module.exports = cuentasController;
