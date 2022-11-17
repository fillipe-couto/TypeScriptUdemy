// Inferência de tipo
const montadoras = ["ford", "hyundai", "toyota"];

// Necessidade de anotar explicitamente (array inicializado vazio)
const carrosPorMontadora: string[][] = [];

// Compatibilidade entre tipos
const montadora = montadoras[0];
// ERRO: const montadora: number = montadoras[0];

// Múltiplos tipos dentro de um array
const datasImportantes = [new Date(), "2020-10-10"];
// OU: const datasImportantes: (string | Date)[] = [];
