import axios, { AxiosPromise } from "axios";

export interface Sincronizavel {
    id?: number;
}

export class SincRemota<T extends Sincronizavel> {
    constructor(public servidor: string) {}
    obter(id: number): AxiosPromise {
        return axios.get(`${this.servidor}/${id}`);
    }

    persistir(dado: T): AxiosPromise {
        const { id } = dado;

        if (id) {
            return axios.put(`${this.servidor}/${id}`, dado);
        }

        return axios.post(this.servidor, dado);
    }
}
