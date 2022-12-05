import { faker } from "@faker-js/faker"; // --> Pode ser necessário instalar arquivos de definição de tipo
import { Localizavel } from "./Mapa";

export class Empresa implements Localizavel {
    nome: string;
    bordao: string;
    localizacao: {
        lat: number;
        lon: number;
    };
    constructor() {
        this.nome = faker.company.name();
        this.bordao = faker.company.catchPhrase();
        this.localizacao = {
            lat: parseFloat(faker.address.latitude()),
            lon: parseFloat(faker.address.longitude()),
        };
    }
    conteudoDoPopUp(): string {
        return `
            <div>
                <h1>Nome da empresa: ${this.nome}</h1>
                <h3>Bordão: ${this.bordao}</h3>
            </div>
        `;
    }
}
