import { AxiosResponse } from "axios";
import { Atributos } from "./Atributos";
import { Evento } from "./Evento";
import { SincRemota } from "./SincRemota";

export interface Dado {
    id?: number;
    nome?: string;
    idade?: number;
}

const servidor = "http://localhost:3000/usuarios";

export class Usuario {
    private readonly eventos: Evento;
    private readonly sincronizar: SincRemota<Dado>;
    private readonly atributos: Atributos<Dado>;

    constructor(atributos: Dado) {
        this.eventos = new Evento();
        // Disparar algum evento para atualizar o frontend!
        this.eventos.quandoOcorrer("atualizacao", () => {
            console.info(this);
        });
        this.sincronizar = new SincRemota<Dado>(servidor);
        this.atributos = new Atributos<Dado>(atributos);
    }

    get get() {
        return this.atributos.get;
    }

    set set(novoDado: Dado) {
        this.atributos.set(novoDado);
        this.eventos.tratarEvento("atualizacao"); // Disparar algum evento para atualizar o frontend!
    }

    get quandoOcorrer() {
        return this.eventos.quandoOcorrer;
    }

    get tratarEvento() {
        return this.eventos.tratarEvento;
    }

    obter(): void {
        const id = this.atributos.get("id");
        if (typeof id !== "number") {
            throw new Error("Não é possível usuário obter com ID nulo!");
        }
        this.sincronizar.obter(id).then((retorno: AxiosResponse): void => {
            this.set = retorno.data;
        });
    }
}
