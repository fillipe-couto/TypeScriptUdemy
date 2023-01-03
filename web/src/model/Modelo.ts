import { AxiosPromise, AxiosResponse } from "axios";

export type FuncaoDeEvento = () => void;

export interface Identificavel {
    id?: number;
}

export interface Atributos<T extends Identificavel> {
    set(novoValor: T): void;
    get<K extends keyof T>(dado: K): T[K];
    obterTudo(): T;
}

export interface Sincronizacao<T extends Identificavel> {
    obter(id: number): AxiosPromise;
    persistir(data: T): AxiosPromise;
}

export interface Eventos {
    quandoOcorrer(nomeEvento: string, funcao: FuncaoDeEvento): void;
    tratarEvento(nomeEvento: string): void;
}

export abstract class Modelo<T extends Identificavel> {
    constructor(private atributos: Atributos<T>, private eventos: Eventos, private sinc: Sincronizacao<T>) {
        // Disparar algum evento para atualizar o frontend!
        this.eventos.quandoOcorrer("atualizacao", () => {
            console.info("Atualizado:");
            console.info(this);
        });
        this.eventos.quandoOcorrer("gravacao", () => {
            console.warn("Gravado!");
        });
        this.eventos.quandoOcorrer("erro", () => {
            console.error("ERRO!");
        });
    }

    quandoOcorrer = this.eventos.quandoOcorrer;
    tratarEvento = this.eventos.tratarEvento;
    get = this.atributos.get;

    set set(novoDado: T) {
        this.atributos.set(novoDado);
        this.eventos.tratarEvento("atualizacao"); // Disparar algum evento para atualizar o frontend!
    }

    obter(): void {
        const id = this.atributos.get("id");
        if (typeof id !== "number") {
            throw new Error("Não é possível usuário obter com ID nulo!");
        }
        this.sinc.obter(id).then((retorno: AxiosResponse): void => {
            this.set = retorno.data;
        });
    }

    persistir(): void {
        this.sinc
            .persistir(this.atributos.obterTudo())
            .then((retorno: AxiosResponse): void => {
                this.eventos.tratarEvento("gravacao"); // Disparar algum evento para atualizar o frontend!
                this.set = retorno.data;
            })
            .catch((retorno: AxiosResponse): void => {
                this.eventos.tratarEvento("erro"); // Disparar algum evento para atualizar o frontend!
            });
    }
}
