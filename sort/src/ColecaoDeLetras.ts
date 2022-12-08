import { Ordenador } from "./Ordenador";

export class ColecaoDeLetras extends Ordenador {
    constructor(private colecao: string) {
        super();
    }

    get length(): number {
        return this.colecao.length;
    }

    get conteudo(): string {
        return this.colecao;
    }

    comparar(indiceEsquerda: number, indiceDireita: number): boolean {
        return this.colecao[indiceEsquerda].toLowerCase() > this.colecao[indiceDireita].toLowerCase();
    }

    comutar(indiceEsquerda: number, indiceDireita: number): void {
        const letras = this.colecao.split("");
        const esquerda = letras[indiceEsquerda];
        letras[indiceEsquerda] = letras[indiceDireita];
        letras[indiceDireita] = esquerda;
        this.colecao = letras.join("");
    }
}
