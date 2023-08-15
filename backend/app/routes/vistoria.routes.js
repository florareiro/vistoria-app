module.exports = (app) => {
  const vistorias = require("../controller/vistoria.controller");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", vistorias.create);

  // Retrieve all Tutorials
  router.get("/", vistorias.findAll);

  app.use("/api/vistorias", router);
};
