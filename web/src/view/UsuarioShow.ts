import { DadosUsuario, Usuario } from "../model/Usuario";
import { View } from "./View";

export class UsuarioShow extends View<Usuario, DadosUsuario> {
    modeloHtml(): string {
        return `
        <div>
            <h1>Detalhes do Usuário</h1>
            <div>Nome: ${this.modelo.get("nome")}</div>
            <div>Idade: ${this.modelo.get("idade")}</div>
        </div>
        `;
    }
}
