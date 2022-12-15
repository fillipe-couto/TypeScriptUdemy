import { LeitorCsv } from "./LeitorCsv";
import { LeitorDePartidas, ResultadoPartidas } from "./LeitorDePartidas";

const leitorDePartidas = new LeitorDePartidas(new LeitorCsv("football.csv"));
leitorDePartidas.carregarDados();

let vitoriasManUnited = 0;

for (let partida of leitorDePartidas.partidas) {
    if (partida[1] === "Man United" && partida[5] === ResultadoPartidas.AnfitriaoVencedor) {
        vitoriasManUnited++;
    } else if (partida[2] === "Man United" && partida[5] === ResultadoPartidas.VisitanteVencedor) {
        vitoriasManUnited++;
    }
}

console.log(`
Relatório:
- Man United ganhou ${vitoriasManUnited} partida(s);
`);
