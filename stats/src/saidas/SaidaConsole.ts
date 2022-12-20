import { Impressora } from "../Relatorio";

export class SaidaConsole implements Impressora {
    imprimir(relatorio: string): void {
        console.log(relatorio);
    }
}
