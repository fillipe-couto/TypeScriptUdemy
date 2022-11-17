// Declaração de objeto
const golzinho = {
    nome: "Gol",
    ano: 1990,
    quebrado: true,
};

// Declaração de função. Anotação longa
const imprimirCarro = (carro: { nome: string; ano: number; quebrado: boolean }): void => {
    console.log("Imprimindo carro (1):");
    console.log(`Nome: ${carro.nome}`);
    console.log(`Ano: ${carro.ano}`);
    console.log(`Quebrado: ${carro.quebrado}`);
};
imprimirCarro(golzinho);

// Declaração de interface com as mesmas propriedades do objeto "golzinho"
interface Carro {
    nome: string;
    ano: number;
    quebrado: boolean;
}

// Declaração de função utilizando interface
const imprimirCarro2 = (carro: Carro): void => {
    console.log("Imprimindo carro (2):");
    console.log(`Nome: ${carro.nome}`);
    console.log(`Ano: ${carro.ano}`);
    console.log(`Quebrado: ${carro.quebrado}`);
};
imprimirCarro2(golzinho);

const celtinha = {
    nome: "Celta",
    ano: 1996,
    quebrado: false,
    quebrar(): void {
        this.quebrado = false;
    },
};

imprimirCarro2(celtinha);
