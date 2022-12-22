import { Usuario } from "./model/Usuario";

const usuario = new Usuario({ id: 1 });
usuario.set({ nome: "Mudando...", idade: 1234 });
usuario.persistir();

const usuario2 = new Usuario({ nome: "Mais um!" });
usuario2.persistir();
