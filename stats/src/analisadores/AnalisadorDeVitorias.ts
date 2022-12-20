import { Partida } from "../Partida";
import { Analisador } from "../Relatorio";
import { ResultadoDePartidas } from "../ResultadoDePartidas";

export class AnalisadorDeVitorias implements Analisador {
    constructor(public time: string) {}

    executar(partidas: Partida[]): string {
        let vitorias = 0;

        for (let partida of partidas) {
            if (partida[1] === "Man United" && partida[5] === ResultadoDePartidas.AnfitriaoVencedor) {
                vitorias++;
            } else if (partida[2] === "Man United" && partida[5] === ResultadoDePartidas.VisitanteVencedor) {
                vitorias++;
            }
        }

        return `Time "${this.time}" ganhou ${vitorias} vez(es).`;
    }
}
