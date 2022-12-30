import axios, { AxiosPromise } from "axios";
import { Identificavel, Sincronizacao } from "./Modelo";

export class Api<T extends Identificavel> implements Sincronizacao<T> {
    constructor(private servidor: string) {}
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
