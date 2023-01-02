import { Usuario } from "./model/Usuario";
import { UsuarioForm } from "./view/UsuarioForm";

const usuarioForm = new UsuarioForm(
    document.getElementById("raiz"),
    Usuario.criarUsuario({ nome: "Fillipe", idade: 37 })
);
usuarioForm.renderizar();
