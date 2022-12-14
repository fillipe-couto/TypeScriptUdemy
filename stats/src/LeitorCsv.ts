import fs from "fs";

export class LeitorCsv {
    dado: string[][] = [];
    constructor(public nomeArquivo: string) {}

    lerArquivo(): void {
        this.dado = fs
            .readFileSync("football.csv", { encoding: "utf-8" })
            .split("\n")
            .map((partida: string): string[] => {
                return partida.split(",");
            });
    }
}
