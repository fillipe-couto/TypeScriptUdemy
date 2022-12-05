import { faker } from "@faker-js/faker"; // --> Pode ser necessário instalar arquivos de definição de tipo
import { Localizavel } from "./Mapa";

export class Usuario implements Localizavel {
    nome: string;
    localizacao: {
        lat: number;
        lon: number;
    };
    constructor() {
        this.nome = faker.name.firstName();
        this.localizacao = {
            lat: parseFloat(faker.address.latitude()),
            lon: parseFloat(faker.address.longitude()),
        };
    }
    conteudoDoPopUp(): string {
        return `Nome do usuário: ${this.nome}`;
    }
}
