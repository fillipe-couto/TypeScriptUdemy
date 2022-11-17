// Estrutura de objeto
const cocaCola = {
    cor: "marrom",
    gas: true,
    acucar: 20,
};

// Estrutura de tupla
const pepsi: [string, boolean, number] = ["marrom", true, 15];

// Alias de tipo
type Bebida = [string, boolean, number];
const cha: Bebida = ["verde claro", false, 0];
console.log(cocaCola);
console.log(cha);
console.log([100, 200, 300]);
