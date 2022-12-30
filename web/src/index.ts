import { Usuario } from "./model/Usuario";

const usuario = Usuario.criarUsuario({ id: 1 });
usuario.obter();

const usuario2 = Usuario.criarUsuario({ id: undefined, nome: "Segundo...", idade: 88 });
usuario2.persistir();
