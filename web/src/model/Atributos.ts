export class Atributos<T extends {}> {
    constructor(private dados: T) {}

    get = <K extends keyof T>(nomeDado: K): T[K] => {
        return this.dados[nomeDado];
    };
    set = (novoDado: T): void => {
        Object.assign(this.dados, novoDado);
    };
}
