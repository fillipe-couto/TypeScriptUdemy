import fs from "fs";
import { Impressora } from "../Relatorio";

export class SaidaHtml implements Impressora {
    imprimir(relatorio: string): void {
        const html = `
        <div>
            <h1>Análise:</h1>
            <div>${relatorio}</div>
        </div>
        `;

        fs.writeFileSync("resultado.html", html);
    }
}
