module.exports = (sequelize, Sequelize) => {
  const Deposito = sequelize.define("deposito", {
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
    cuenta: {
      allowNull: true,
      type: Sequelize.STRING,
    },
    monto: {
      allowNull: true,
      type: Sequelize.DECIMAL(10, 2),
    },
  });
  return Deposito;
};
