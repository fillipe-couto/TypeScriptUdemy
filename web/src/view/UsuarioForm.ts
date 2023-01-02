import { Usuario } from "../model/Usuario";

export class UsuarioForm {
    constructor(private elementoPai: Element | null, private modelo: Usuario) {
        this.modelo.quandoOcorrer("atualizacao", (): void => {
            this.renderizar();
        });
    }

    /*
        O mapa define um conjunto de objetos do tipo "<nome_do_evento>:<seletor_html>": <funcao>
    */
    mapaDeEventos(): { [chave: string]: () => void } {
        return {
            "click:button": this.botaoClicado, // Selecao por tag
            "click:#b2": this.botaoClicado2, // Selecao por id
            "click:.idadeAleatoria": this.definirIdadeAleatoria, // Selecao por classe
        };
    }

    botaoClicado(): void {
        console.log("Algum botão clicado!");
    }

    botaoClicado2(): void {
        console.warn("Botão 2 clicado!");
    }

    definirIdadeAleatoria = (): void => {
        this.modelo.definirIdadeAleatoria();
    };

    /*
        Anexação dos eventos aos elementos, com base no mapa
    */
    mapearEventos(fragmento: DocumentFragment): void {
        const mapaDeEventos = this.mapaDeEventos();
        for (let evento in mapaDeEventos) {
            const [nomeEvento, seletor] = evento.split(":");
            fragmento.querySelectorAll(seletor).forEach((elemento) => {
                elemento.addEventListener(nomeEvento, mapaDeEventos[evento]);
            });
        }
    }

    modeloHtml(): string {
        return `
        <div>
            <h1>Form de Usuário</h1>
            <div>Nome do usuário: ${this.modelo.get("nome")}</div>
            <div>Idade do usuário: ${this.modelo.get("idade")}</div>
            <input />
            <button>Botao 1</button>
            <button id="b2">Botao 2</button>
            <button class="idadeAleatoria">Definir idade aleatoria</button>
        </div>
        `;
    }

    renderizar(): void {
        if (this.elementoPai) {
            this.elementoPai.innerHTML = "";
            const elementoModelo = document.createElement("template");
            elementoModelo.innerHTML = this.modeloHtml();
            this.mapearEventos(elementoModelo.content);
            this.elementoPai.append(elementoModelo.content);
        } else {
            throw new Error("Elemento pai não encontrado");
        }
    }
}
