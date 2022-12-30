import { Atributos, Identificavel } from "./Modelo";

export class AtributosImpl<T extends Identificavel> implements Atributos<T> {
    constructor(private dados: T) {}

    get = <K extends keyof T>(nomeDado: K): T[K] => {
        return this.dados[nomeDado];
    };
    set = (novoDado: T): void => {
        Object.assign(this.dados, novoDado);
    };
    obterTudo(): T {
        return this.dados;
    }
}
