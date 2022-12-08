import { ColecaoDeLetras } from "./ColecaoDeLetras";
import { ColecaoDeNumeros } from "./ColecaoDeNumeros";
import { ListaLigada } from "./ListaLigada";
import { Ordenador } from "./Ordenador";

const numeros = new ColecaoDeNumeros([5, 7, -2, 10, 3, 4]);
console.log(`\nColeção anterior: [${numeros.conteudo}]`);
numeros.ordenarColecao();
console.log(`Coleção ordenada: [${numeros.conteudo}]\n`);

const nome = new ColecaoDeLetras("FillipeCouto");
console.log(`\nColeção anterior: [${nome.conteudo}]`);
nome.ordenarColecao();
console.log(`Coleção ordenada: [${nome.conteudo}]\n`);

const listaLigada = new ListaLigada();
listaLigada.adicionar(123);
listaLigada.adicionar(50);
listaLigada.adicionar(100);
listaLigada.adicionar(-7);
listaLigada.adicionar(30);
console.log("\nColeção anterior:");
listaLigada.imprimir();
listaLigada.ordenarColecao();
console.log("\nColeção ordenada:");
listaLigada.imprimir();
