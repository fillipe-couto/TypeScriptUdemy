import { Partida } from "./Partida";
import { ResultadoDePartidas } from "./ResultadoDePartidas";
import { dataEmStringParaObjetoDate } from "./utils";

export interface LeitorDeDados {
    ler(): void;
    dados: string[][];
}

export class LeitorDePartidas {
    partidas: Partida[] = [];
    constructor(public leitor: LeitorDeDados) {}

    carregarDados(): void {
        this.leitor.ler();
        this.partidas = this.leitor.dados.map((tupla: string[]): Partida => {
            return [
                dataEmStringParaObjetoDate(tupla[0]),
                tupla[1],
                tupla[2],
                parseInt(tupla[3]),
                parseInt(tupla[4]),
                tupla[5] as ResultadoDePartidas,
                tupla[6],
            ];
        });
    }
}
