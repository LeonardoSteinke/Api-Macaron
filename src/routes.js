const express = require("express");
const routes = express.Router();

const UsuarioController = require("./controllers/UsuarioController");
const ReceitaController = require("./controllers/ReceitaController");

//Rotas do usuário
routes.get("/usuario", UsuarioController.index);
routes.get("/usuario/:id", UsuarioController.index);
routes.post("/usuario", UsuarioController.create);
routes.put("/usuario/:id", UsuarioController.update);
routes.delete("/usuario/:id", UsuarioController.delete);

//Rotas da receita
routes.get("/receita", ReceitaController.index);
routes.post("/receita", ReceitaController.create);
routes.put("/receita/:id", ReceitaController.update);
routes.delete("/receita/:id", ReceitaController.delete);

module.exports = routes;
