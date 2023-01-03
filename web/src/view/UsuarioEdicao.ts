import { DadosUsuario, Usuario } from "../model/Usuario";
import { UsuarioForm } from "./UsuarioForm";
import { UsuarioShow } from "./UsuarioShow";
import { View } from "./View";

export class UsuarioEdicao extends View<Usuario, DadosUsuario> {
    mapaDeRegioes = (): { [chave: string]: string } => {
        return {
            usuarioShow: ".usuario-show",
            usuarioForm: ".usuario-form",
        };
    };

    quandoRenderizar = (): void => {
        new UsuarioShow(this.regioes.usuarioShow, this.modelo).renderizar();
        new UsuarioForm(this.regioes.usuarioForm, this.modelo).renderizar();
    };

    modeloHtml(): string {
        return `
        <div>
            <div class="usuario-show"></div>
            <div class="usuario-form"></div>
        </div>
        `;
    }
}
