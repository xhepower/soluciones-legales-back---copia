module.exports = (sequelize, Sequelize) => {
  const Ingreso = sequelize.define("ingreso", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    fecha: {
      allowNull: false,
      type: Sequelize.DATEONLY,
    },
    concepto: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    descripcion: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    cuenta: {
      allowNull: true,
      type: Sequelize.STRING,
    },
    tipo: {
      allowNull: true,
      type: Sequelize.STRING,
    },
    monto: {
      allowNull: true,
      type: Sequelize.DECIMAL(10, 2),
    },
  });
  return Ingreso;
};
