export abstract class Ordenador {
    abstract length: number;
    abstract comparar(indiceEsquerda: number, indiceDireita: number): boolean;
    abstract comutar(indiceEsquerda: number, indiceDireita: number): void;

    ordenarColecao(): void {
        const { length } = this;

        for (let x = 0; x < length; x++) {
            for (let y = 0; y < length - x - 1; y++) {
                if (!this.comparar(y, y + 1)) {
                    continue;
                }
                this.comutar(y, y + 1);
            }
        }
    }
}
