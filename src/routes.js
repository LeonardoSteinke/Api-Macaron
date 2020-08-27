const express = require("express");
const routes = express.Router();

const UsuarioController = require("./controllers/UsuarioController");
const ReceitaController = require("./controllers/ReceitaController");
const IngredienteController = require("./controllers/IngredienteController");
const ComentarioController = require("./controllers/ComentarioController");
const IngredienteReceitaController = require("./controllers/IngredienteReceitaController");
const ReceitaUsuarioController = require("./controllers/ReceitaUsuarioController");
const CalendarioReceitaController = require("./controllers/CalendarioReceitaController");
const SessionController = require("./controllers/SessionController");
const UsuarioIngredienteController = require("./controllers/UsuarioIngredienteController");


//npx knex migrate:latest

//Rota Session
routes.post('/session', SessionController.login);

//Rotas dos Usuários
routes.get("/usuario", UsuarioController.index);
routes.get("/usuario/:id", UsuarioController.index);
routes.post("/usuario", UsuarioController.create);
routes.put("/usuario/:id", UsuarioController.update);
routes.delete("/usuario/:id", UsuarioController.delete);

//Rotas das Receitas
routes.get("/receita", ReceitaController.index);
routes.get("/receita/:id", ReceitaController.index);
routes.post("/receita", ReceitaController.create);
routes.put("/receita/:id", ReceitaController.update);
routes.delete("/receita/:id", ReceitaController.delete);

//Rotas dos Ingredientes
routes.get("/ingrediente", IngredienteController.index);
routes.get("/ingrediente/:id", IngredienteController.index);
routes.post("/ingrediente", IngredienteController.create);
routes.put("/ingrediente/:id", IngredienteController.update);
routes.delete("/ingrediente/:id", IngredienteController.delete);

//Rotas dos Comentarios
routes.get("/comentario", ComentarioController.index);
routes.get("/comentario/:id", ComentarioController.index);
routes.post("/comentario", ComentarioController.create);
routes.put("/comentario/:id", ComentarioController.update);
routes.delete("/comentario/:id", ComentarioController.delete);

//Rotas IngredienteReceita
routes.get("/receita/ingredientes/:id", IngredienteReceitaController.index);
routes.post("/receita/ingredientes", IngredienteReceitaController.create);
routes.put("/receita/ingrediente/:id", IngredienteReceitaController.update);
routes.delete("/receita/ingredientes/:id", IngredienteReceitaController.delete);

//Rotas UsuarioIngrediente
routes.get("/usuario/ingredientes/:id", UsuarioIngredienteController.index);
routes.post("/usuario/ingredientes", UsuarioIngredienteController.create);
routes.put("/usuario/ingrediente/:id", UsuarioIngredienteController.update);
routes.delete("/usuario/ingredientes/:id", UsuarioIngredienteController.delete);

//Rotas ReceitaUsuario
routes.get("/usuario/receita/:id", ReceitaUsuarioController.index);
routes.put("/usuario/receita/:id", ReceitaUsuarioController.update);
routes.delete("/usuario/receita/:id", ReceitaUsuarioController.delete);

//Rotas CalendarioReceita
routes.get("/usuario/calendario/:id", CalendarioReceitaController.index);
routes.post("/usuario/calendario", CalendarioReceitaController.create);
routes.delete("/usuario/calendario/:id", CalendarioReceitaController.delete);

module.exports = routes;
