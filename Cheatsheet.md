# CHEATSHEET - Typescript

## Seção 01

- Typescript = Javascript + [Type System];
- Objetivo: buscar erros durante o desenvolvimento;
- Não afeta desempenho;
- Configurando NPM para trabalhar com Typescript: **npm install -g typescript ts-node**;
- Módulo "typescript" instala o compilador Typescript, executável com o comando **tsc <arquivo.ts>**;
- Módulo "ts-node" instala o compilador/executor de arquivos Typescript com o comando **ts-node <arquivo.ts>**;

## Seção 02

- Tipo (em Typescript): atalho para descrever propriedades e funções que uma variável tem;

## Seção 03

- Type annotation: código inserido explicitamente para informar qual é o tipo da variável;
- Type inference: Typescript tentará interpretar implicitamente qual é o tipo da variável;
- Anotação de tipo explícita: dois-pontos e tipo após nome da variável;
- Anotação implícita: sempre que uma variável for inicializada ao ser declarada;
- Tipo **any**: quando o Typescript não pode/consegue deduzir/definir o tipo de uma variável;
- Sempre que possível, utilizar **anotações implícitas**;
- Três casos em que a **anotação explícita** deverá ser utilizada:
  - Retorno de funções do tipo **any**;
  - Ao inicializar um valor à variável em linha diferente da sua declaração;
  - Quando o tipo não puder ser inferido (exemplo: uma variável poder assumir dois tipos);
- Dois ou mais tipos em uma variável: utilizar o _pipe_ ("|");

## Seção 04

- Boa prática: sempre colocar explicitamente o tipo de retorno de uma função;
- Funções podem ter o tipo de retorno **never**, que indica que nunca retornam nada;
- Objetos em argumentos de funções podem ser descontruídos/decompostos;

## Seção 05

- Arrays em typescript devem preferencialmente conter um só tipo de dado;
- Só precisam ter anotações explícitas se forem inicializados como vazio;
- Podem ter mais de um tipo de dado assim como variáveis (usando _pipe_ ("|"));

## Seção 06

- Tuplas: tipo de array com tamanho fixo e propriedades ordenadas;
- Estrutura de dados similar a objetos, porém sem rótulos nos dados;
- Devem ser explicitamente anotadas durante inicialização, senão serão tratadas como arrays comuns;

## Seção 07

- Interface: cria um novo tipo que descreve os nomes das propriedades e tipos de valor de um objeto;
- Tipos compostos (funções, objetos) também podem fazer parte da interface;
- Para satisfazer uma condição, um argumento de função precisa satisfazer apenas o _mínimo_ que a interface exige;
- Sempre que possível, argumentos de função devem ser definidos com interfaces para aumentar a reusabilidade;
