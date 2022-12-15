import { LeitorCsv } from "./LeitorCsv";
import { dataEmStringParaObjetoDate } from "../utils";

type Partida = [Date, string, string, number, number, ResultadoPartidas, string];

export enum ResultadoPartidas {
    AnfitriaoVencedor = "H",
    VisitanteVencedor = "A",
    Empate = "D",
}

export class LeitorDePartidas extends LeitorCsv<Partida> {
    protected mapearTupla(tupla: string[]): Partida {
        return [
            dataEmStringParaObjetoDate(tupla[0]),
            tupla[1],
            tupla[2],
            parseInt(tupla[3]),
            parseInt(tupla[4]),
            tupla[5] as ResultadoPartidas,
            tupla[6],
        ];
    }
}
