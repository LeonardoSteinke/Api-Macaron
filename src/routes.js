const express = require("express");
const routes = express.Router();

const UsuarioController = require("./controllers/UsuarioController");
const ReceitaController = require("./controllers/ReceitaController");

routes.get("/usuario", UsuarioController.index);
routes.post("/usuario", UsuarioController.create);

routes.get("/receita", ReceitaController.index);
routes.post("/receita", ReceitaController.create);

module.exports = routes;
