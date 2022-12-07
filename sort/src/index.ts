class Ordenador {
    constructor(private colecao: number[]) {}

    ordenarColecao(): void {
        const { length } = this.colecao;

        for (let x = 0; x < length; x++) {
            for (let y = 0; y < length - x - 1; y++) {
                if (this.colecao[y] <= this.colecao[y + 1]) {
                    continue;
                }
                const esquerda = this.colecao[y];
                this.colecao[y] = this.colecao[y + 1];
                this.colecao[y + 1] = esquerda;
            }
        }
    }

    obterColecao(): number[] {
        return this.colecao;
    }
}

const ordenar = new Ordenador([5, 7, -2, 10, 3, 4]);
ordenar.ordenarColecao();
console.log(ordenar.obterColecao());
