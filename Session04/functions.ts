// Declarando funções como variavel sem anotation explicita
const adicionar = (a: number, b: number): number => {
    return a + b;
}

// Declarando funções explicitamente
function subtrair(a: number, b: number): number {
    return a - b;
}

// Declarando funções como variavel com anotation explicita
const multiplicar: (a: number, b: number) => number = function(a: number, b: number): number {
    return a * b;
}

const testeFn = (msg: string): void => {

    return;
};

const climaDeHoje = {
    data: new Date(),
    clima: 'ensolarado'
}

const logarClima = ({data, clima }: {data: Date, clima: string}): void => {
    console.log(data);
    console.log(clima);
}

console.log(adicionar(1, 2));
console.log(subtrair(2, 1));
console.log(multiplicar(2, 3));
logarClima(climaDeHoje);

