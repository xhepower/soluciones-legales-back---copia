//* Este es como un semillero que estoy creado para esta miserable base de datos
const db = require("./");

const faker = require("faker");
const Cliente = db.clientes;
const Concepto = db.conceptos;
const Cuenta = db.cuentas;
const Ingreso = db.ingresos;
const Egreso = db.egresos;
const Deposito = db.depositos;
const Retiro = db.retiros;
var bcrypt = require("bcryptjs");

faker.locale = "es_MX";
const initial = () => {
  //para los clientes
  for (i = 0; i < 30; i++) {
    let u = {
      nombre: faker.name.findName(),
      direccion:
        faker.address.streetAddress() +
        " " +
        faker.address.city() +
        " " +
        faker.address.country(),
      identidad: faker.phone.phoneNumber(),
      sexo: faker.random.arrayElement(["hombre", "mujer"]),
    };
    Cliente.create(u);
  }
  //para los conceptos
  for (i = 0; i < 30; i++) {
    let u = {
      nombre: faker.commerce.productName(),
      tipo: faker.random.arrayElement(["ingreso", "egreso"]),
    };
    Concepto.create(u);
  }
  //para las cuentas
  for (i = 0; i < 5; i++) {
    let u = {
      nombre: faker.commerce.product(),
      tipo: faker.random.arrayElement(["ahorro", "billetera electronica"]),
    };
    Cuenta.create(u);
  }
  //para los ingresos
  for (i = 0; i < 20; i++) {
    let u = {
      fecha: faker.date.between("2022-01-01", "2022-05-10"),
      concepto: faker.name.findName(),
      descripcion: faker.commerce.productName(),
      cuenta: faker.random.arrayElement([1, 2, 3, 4, 5]),
      monto: faker.datatype.number({
        min: 5.5,
        max: 100.1,
      }),
      tipo: faker.random.arrayElement(["efectivo", "transferencia"]),
    };
    Ingreso.create(u);
  }
  //para los egresos
  for (i = 0; i < 20; i++) {
    let u = {
      fecha: faker.date.between("2022-01-01", "2022-05-10"),
      concepto: faker.name.findName(),
      descripcion: faker.commerce.productName(),
      cuenta: faker.random.arrayElement([1, 2, 3, 4, 5]),
      monto: faker.datatype.number({
        min: 5.5,
        max: 100.1,
      }),
      tipo: faker.random.arrayElement(["efectivo", "transferencia"]),
    };
    Egreso.create(u);
  }
  //para los depositos
  for (i = 0; i < 20; i++) {
    let u = {
      fecha: faker.date.between("2022-01-01", "2022-05-10"),
      cuenta: faker.random.arrayElement([1, 2, 3, 4, 5]),
      monto: faker.datatype.number({
        min: 5.5,
        max: 100.1,
      }),
    };
    Deposito.create(u);
  }
  //para los retiros
  for (i = 0; i < 20; i++) {
    let u = {
      fecha: faker.date.between("2022-01-01", "2022-05-10"),
      cuenta: faker.random.arrayElement([1, 2, 3, 4, 5]),
      monto: faker.datatype.number({
        min: 5.5,
        max: 100.1,
      }),
    };
    Retiro.create(u);
  }
};
module.exports = initial;
