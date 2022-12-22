"use strict";
exports.__esModule = true;
var Usuario_1 = require("./model/Usuario");
var usuario = new Usuario_1.Usuario({ id: 1 });
usuario.set({ nome: "Mudando...", idade: 1234 });
usuario.persistir();
var usuario2 = new Usuario_1.Usuario({ nome: "Mais um!" });
usuario2.persistir();
