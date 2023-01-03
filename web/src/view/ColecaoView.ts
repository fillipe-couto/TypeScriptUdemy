import { Colecao } from "../model/Colecao";

export abstract class ColecaoView<T, K> {
    constructor(private elementoPai: Element, private colecao: Colecao<T, K>) {}

    abstract renderizarElemento(modelo: T, elementoPai: Element): void;

    renderizar(): void {
        this.elementoPai.innerHTML = "";
        const elementoModelo = document.createElement("template");

        for (let modelo of this.colecao.itens) {
            const elementoPai = document.createElement("div");
            this.renderizarElemento(modelo, elementoPai);
            elementoModelo.content.append(elementoPai);
        }
        this.elementoPai.append(elementoModelo.content);
    }
}
