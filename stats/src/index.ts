import { LeitorCsv } from "./LeitorCsv";

const leitor = new LeitorCsv("football.csv");
leitor.lerArquivo();

enum ResultadoPartidas {
    AnfitriaoVencedor = "H",
    VisitanteVencedor = "A",
    Empate = "D",
}

let vitoriasManUnited = 0;

for (let partida of leitor.dado) {
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
