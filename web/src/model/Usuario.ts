import axios, { AxiosResponse } from "axios";

interface Dado {
    id?: number;
    nome?: string;
    idade?: number;
}

export class Usuario {
    constructor(private dados: Dado) {}

    get(nomeDado: string): string | number {
        return this.dados[nomeDado];
    }
    set(novoDado: Dado): void {
        Object.assign(this.dados, novoDado);
    }

    obter(): void {
        axios.get(`http://localhost:3000/users/${this.get("id")}`).then((response: AxiosResponse): void => {
            this.set(response.data);
        });
    }

    persistir(): void {
        const id = this.get("id");

        if (id) {
            axios.put(`http://localhost:3000/users/${id}`, this.dados).then((response: AxiosResponse): void => {});
        } else {
            axios.post("http://localhost:3000/users", this.dados).then((response: AxiosResponse): void => {});
        }
    }
}
