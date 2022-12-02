import { faker } from "@faker-js/faker"; // --> Pode ser necessário instalar arquivos de definição de tipo

export class Usuario {
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
}
