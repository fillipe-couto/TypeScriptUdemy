import axios, { AxiosResponse } from "axios";
import { EventosImpl } from "./EventosImpl";
import { Modelo } from "./Modelo";
import { Usuario, DadosUsuario } from "./Usuario";

export class Colecao<T, K> {
    itens: T[];
    eventos: EventosImpl;

    constructor(private servidor: string, private desserializar: (json: K) => T) {
        this.itens = [];
        this.eventos = new EventosImpl();
        this.eventos.quandoOcorrer("atualizacao", () => {
            console.log("Atualizado!");
            console.log(this.itens);
        });
    }

    quandoOcorrer() {
        return this.eventos.quandoOcorrer;
    }

    get tratarEvento() {
        return this.eventos.tratarEvento;
    }

    fetch(): void {
        axios.get(this.servidor).then((retorno: AxiosResponse) => {
            retorno.data.forEach((item: K) => {
                this.itens.push(this.desserializar(item));
            });
            this.eventos.tratarEvento("atualizacao");
        });
    }
}
