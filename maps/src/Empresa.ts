import { faker } from "@faker-js/faker"; // --> Pode ser necessário instalar arquivos de definição de tipo
export class Empresa {
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
}
