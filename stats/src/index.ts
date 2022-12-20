import { AnalisadorDeVitorias } from "./analisadores/AnalisadorDeVitorias";
import { LeitorCsv } from "./LeitorCsv";
import { LeitorDePartidas } from "./LeitorDePartidas";
import { Relatorio } from "./Relatorio";
import { SaidaConsole } from "./saidas/SaidaConsole";

const leitorDePartidas = new LeitorDePartidas(new LeitorCsv("football.csv"));
leitorDePartidas.carregarDados();

const relatorioDeVitoriasNoConsole = new Relatorio(new AnalisadorDeVitorias("Man United"), new SaidaConsole());
relatorioDeVitoriasNoConsole.gerarRelatorio(leitorDePartidas.partidas);

const relatorioDeVitoriasHtml = Relatorio.relatorioDeVitoriasEmHtml("Man United");
relatorioDeVitoriasHtml.gerarRelatorio(leitorDePartidas.partidas);
