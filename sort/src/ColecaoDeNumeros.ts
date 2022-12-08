import { Ordenador } from "./Ordenador";

export class ColecaoDeNumeros extends Ordenador {
    constructor(private colecao: number[]) {
        super();
    }

    get length(): number {
        return this.colecao.length;
    }

    get conteudo(): number[] {
        return this.colecao;
    }

    comparar(indiceEsquerda: number, indiceDireita: number): boolean {
        return this.colecao[indiceEsquerda] > this.colecao[indiceDireita];
    }

    comutar(indiceEsquerda: number, indiceDireita: number): void {
        const esquerda = this.colecao[indiceEsquerda];
        this.colecao[indiceEsquerda] = this.colecao[indiceDireita];
        this.colecao[indiceDireita] = esquerda;
    }
}
