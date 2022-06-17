const db = require("../models");
const boom = require("@hapi/boom");
const Cliente = db.clientes;
const Op = db.Sequelize.Op;
class clientesController {
  constructor() {}
  // Create and Save a new Tutorial
  async create(data) {
    const newCliente = await Cliente.create(data);
    return newCliente;
  }
  async findAll(nombre) {
    var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;
    const rta = await Cliente.findAll({
      where: condition,
      order: [["id", "DESC"]],
    });
    return rta;
  }
  /* async findAll(req, res) {
    let nombre = req.body.nombre;
    // var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;
    // const rta = await Cliente.findAll({ where: condition });
    return nombre;
  }*/
  // Find a single Tutorial with an id
  async findOne(id) {
    const cliente = await Cliente.findByPk(id);
    if (!cliente) {
      throw boom.notFound("cliente no encontrado");
    }
    return cliente;
  }
  // Update a Tutorial by the id in the request
  async update(id, changes) {
    const cliente = await this.findOne(id);
    const rta = await cliente.update(changes);
    return rta;
  }
  async delete(id) {
    const cliente = await this.findOne(id);
    await cliente.destroy();
    return { rta: true };
  }
}
module.exports = clientesController;
