import { DadosUsuario, Usuario } from "../model/Usuario";
import { View } from "./View";

export class UsuarioForm extends View<Usuario, DadosUsuario> {
    /*
        O mapa define um conjunto de objetos do tipo "<nome_do_evento>:<seletor_html>": <funcao>
    */
    mapaDeEventos = (): { [chave: string]: () => void } => {
        return {
            "click:#nome": this.definirNome, // Selecao por id
            "click:.idadeAleatoria": this.definirIdadeAleatoria, // Selecao por classe
            "click:.salvar": this.salvar, // Selecao por classe
            "click:button": this.botaoClicado, // Selecao por tag
        };
    };

    modeloHtml(): string {
        return `
        <div>
            <input placeholder="${this.modelo.get("nome")}"/>
            <button id="nome">Definir nome</button>
            <button class="idadeAleatoria">Definir idade aleatoria</button>            
            <button class="salvar">Salvar</button>
            <button>Botao qualquer</button>

        </div>
        `;
    }

    definirNome = (): void => {
        if (this.elementoPai) {
            const entrada = this.elementoPai.querySelector("input");
            this.modelo.set = { nome: entrada?.value };
        } else {
            throw new Error("Elemento pai não definido");
        }
    };

    definirIdadeAleatoria = (): void => {
        this.modelo.definirIdadeAleatoria();
    };

    salvar = (): void => {
        this.modelo.persistir();
    };

    botaoClicado(): void {
        console.log("Algum botão clicado!");
    }
}
