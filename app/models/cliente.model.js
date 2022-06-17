module.exports = (sequelize, Sequelize) => {
  const Cliente = sequelize.define("cliente", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    nombre: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    direccion: {
      allowNull: true,
      type: Sequelize.STRING,
    },
    identidad: {
      allowNull: true,
      type: Sequelize.STRING,
    },
    sexo: {
      allowNull: false,
      type: Sequelize.STRING,
    },
  });
  return Cliente;
};
