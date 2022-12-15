import fs from "fs";
import { LeitorDeDados } from "./LeitorDePartidas";

export class LeitorCsv implements LeitorDeDados {
    dados: string[][] = [];
    constructor(public nomeArquivo: string) {}

    ler(): void {
        this.dados = fs
            .readFileSync("football.csv", { encoding: "utf-8" })
            .split("\n")
            .map((partida: string): string[] => {
                return partida.split(",");
            });
    }
}
