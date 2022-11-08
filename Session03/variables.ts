// Tipos primitivos
let macas: number = 5;
let velocidade: string = "rápido";

// Objetos da linguagem
let agora: Date = new Date();

// Arrays
let cores: string[] = ["vermelho", "azul"];
let numeros: number[] = [1, 2.5, -45];

// Classes
class Carro {};
let carro: Carro = new Carro();

// Objeto literal
let ponto: {x: number; y: number} = {
    x: 10,
    y: 10
}

// Funções
const logarNumero: (n: number) => void = (n: number) => {
    console.log(n);
}

// Quando usar anotações explícitas:
// 1) Funções que retornam o tipo "any"
const json = '{"x": 10, "y": 20}';
const coordenadas: number = JSON.parse(json);
console.log(coordenadas);
// 2) Inicialização após declaração;
let valor: boolean;
valor = true;
// 3) Tipo que não pode ser facilmente inferido
let teste: boolean | number = false;
teste = 0.5;