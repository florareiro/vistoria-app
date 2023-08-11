const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Vistoria = sequelize.define("vistorias", {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cpf: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rg: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    telefone: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    endereco: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cnh: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    selfie: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    placa: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    chassi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    renavam: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    uf: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    marca: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    modelo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    km: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nivel_combustivel: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nivel_combustivel: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    foto_placa: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    foto_dianteira: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    foto_traseira: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    foto_hodometro: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    foto_banco: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

  return Vistoria;
};
