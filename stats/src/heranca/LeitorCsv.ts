import fs from "fs";

// Definindo a classe abstrata com Generics (tipo parametrizado)
export abstract class LeitorCsv<T> {
    dado: T[] = [];
    constructor(public nomeArquivo: string) {}
    protected abstract mapearTupla(tupla: string[]): T;

    lerArquivo(): void {
        this.dado = fs
            .readFileSync("football.csv", { encoding: "utf-8" })
            .split("\n")
            .map((partida: string): string[] => {
                return partida.split(",");
            })
            .map(this.mapearTupla);
    }
}
