const db = require("../models/index");
const Vistoria = db.vistorias;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  console.log(req.body);
  // Create a Tutorial
  const vistoria = {
    nome: req.body.condutor.nome,
    cpf: req.body.condutor.cpf,
    rg: req.body.condutor.rg,
    telefone: req.body.condutor.telefone,
    endereco: req.body.condutor.endereco,
    cnh: req.body.condutor.cnh,
    selfie: req.body.condutor.selfie,
    placa: req.body.veiculo.placa,
    chassi: req.body.veiculo.chassi,
    renavam: req.body.veiculo.renavam,
    uf: req.body.veiculo.uf,
    marca: req.body.veiculo.marca,
    modelo: req.body.veiculo.modelo,
    km: req.body.veiculo.km,
    nivel_combustivel: req.body.veiculo.nivel_combustivel,
    foto_placa: req.body.fotos_veiculo.foto_placa,
    foto_dianteira: req.body.fotos_veiculo.foto_dianteira,
    foto_traseira: req.body.fotos_veiculo.foto_traseira,
    foto_hodometro: req.body.fotos_veiculo.foto_hodometro,
    foto_banco: req.body.fotos_veiculo.foto_banco,
  };

  // Save Tutorial in the database
  Vistoria.create(vistoria)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  Vistoria.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};
