import { DadosUsuario, Usuario } from "../model/Usuario";
import { ColecaoView } from "./ColecaoView";
import { UsuarioShow } from "./UsuarioShow";

export class ListaUsuario extends ColecaoView<Usuario, DadosUsuario> {
    renderizarElemento(modelo: Usuario, elementoPai: Element): void {
        new UsuarioShow(elementoPai, modelo).renderizar();
    }
}
