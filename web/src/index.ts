import { Colecao } from "./model/Colecao";
import { DadosUsuario, Usuario } from "./model/Usuario";
import { ListaUsuario } from "./view/ListaUsuario";

const usuarios = new Colecao("http://localhost:3000/usuarios", (json: DadosUsuario) => {
    return Usuario.criarUsuario(json);
});
usuarios.fetch();

usuarios.quandoOcorrer()("atualizacao", () => {
    const raiz = document.getElementById("raiz");
    if (raiz) {
        new ListaUsuario(raiz, usuarios).renderizar();
    }
});
