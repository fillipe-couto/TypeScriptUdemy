import { Ordenador } from "./Ordenador";

class No {
    public proximo: No | null = null;
    constructor(public dado: number) {}
}

export class ListaLigada extends Ordenador {
    inicio: No | null = null;

    get length() {
        if (this.inicio == null) {
            return 0;
        }

        let retorno = 1;
        let fim = this.inicio;
        while (fim.proximo != null) {
            retorno++;
            fim = fim.proximo;
        }
        return retorno;
    }

    adicionar(dado: number): void {
        if (this.inicio == null) {
            this.inicio = new No(dado);
            return;
        }

        let fim = this.inicio;
        while (fim.proximo != null) {
            fim = fim.proximo;
        }
        fim.proximo = new No(dado);
    }

    obterDoIndice(indice: number): No {
        if (this.inicio == null) {
            throw new Error("Indice inexistente");
        }

        let indiceBusca = 0;
        let noBusca: No | null = this.inicio;
        while (noBusca != null) {
            if (indiceBusca === indice) {
                return noBusca;
            }

            indiceBusca++;
            noBusca = noBusca.proximo;
        }

        throw new Error("Indice inexistente");
    }

    imprimir(): void {
        if (this.inicio == null) {
            return;
        }

        let no: No | null = this.inicio;
        while (no != null) {
            console.log(no.dado);
            no = no.proximo;
        }
    }

    comparar(indiceEsquerda: number, indiceDireita: number): boolean {
        if (this.inicio == null) {
            throw new Error("Lista está vazia");
        }

        return this.obterDoIndice(indiceEsquerda).dado > this.obterDoIndice(indiceDireita).dado;
    }

    comutar(indiceEsquerda: number, indiceDireita: number): void {
        const noEsquerdo = this.obterDoIndice(indiceEsquerda);
        const noDireito = this.obterDoIndice(indiceDireita);
        const esquerda = noEsquerdo.dado;
        noEsquerdo.dado = noDireito.dado;
        noDireito.dado = esquerda;
    }
}
