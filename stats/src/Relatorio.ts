import { AnalisadorDeVitorias } from "./analisadores/AnalisadorDeVitorias";
import { Partida } from "./Partida";
import { SaidaHtml } from "./saidas/SaidaHtml";

export interface Analisador {
    executar(partidas: Partida[]): string;
}

export interface Impressora {
    imprimir(relatorio: string): void;
}

export class Relatorio {
    constructor(public analisador: Analisador, public impressora: Impressora) {}

    static relatorioDeVitoriasEmHtml(time: string): Relatorio {
        return new Relatorio(new AnalisadorDeVitorias(time), new SaidaHtml());
    }

    gerarRelatorio(partidas: Partida[]): void {
        this.impressora.imprimir(this.analisador.executar(partidas));
    }
}
