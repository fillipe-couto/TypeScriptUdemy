class ArrayQualquer<T> {
    constructor(public colecao: T[]) {}
    get(indice: number): T {
        return this.colecao[indice];
    }
}

// Type inference em Generics
// Equivale a "const array = new ArrayQualquer<string>(["AAA", "BBB", "CCC"]);"
const array = new ArrayQualquer(["AAA", "BBB", "CCC"]);

// Funções com Generics
function imprimirArray<T>(array: T[]): void {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
imprimirArray([1, 2, 3]);

// Constrains in Generics
class Carro {
    imprimir(): void {}
}
class Casa {
    imprimir(): void {}
}
interface Printavel {
    imprimir(): void;
}
function imprimirObjetos<T extends Printavel>(array: T[]): void {
    for (let i = 0; i < array.length; i++) {
        array[i].imprimir();
    }
}
imprimirObjetos([new Carro(), new Carro()]);
