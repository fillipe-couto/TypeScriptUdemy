import { Identificavel, Modelo } from "../model/Modelo";

export abstract class View<T extends Modelo<K>, K extends Identificavel> {
    regioes: { [chave: string]: Element } = {};

    constructor(protected elementoPai: Element | null, protected modelo: T) {
        this.modelo.quandoOcorrer("atualizacao", (): void => {
            this.renderizar();
        });
    }

    abstract modeloHtml(): string;

    mapaDeEventos = (): { [chave: string]: () => void } => {
        return {};
    };

    mapaDeRegioes = (): { [chave: string]: string } => {
        return {};
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

    mapearRegioes = (fragmento: DocumentFragment): void => {
        const mapaDeRegioes = this.mapaDeRegioes();
        for (let chave in mapaDeRegioes) {
            const elemento = fragmento.querySelector(mapaDeRegioes[chave]);
            if (elemento) {
                this.regioes[chave] = elemento;
            }
        }
    };

    quandoRenderizar = (): void => {};

    renderizar(): void {
        if (this.elementoPai) {
            this.elementoPai.innerHTML = "";
            const elementoModelo = document.createElement("template");
            elementoModelo.innerHTML = this.modeloHtml();
            this.mapearEventos(elementoModelo.content);
            this.mapearRegioes(elementoModelo.content);
            this.quandoRenderizar();
            this.elementoPai.append(elementoModelo.content);
        } else {
            throw new Error("Elemento pai não definido");
        }
    }
}
