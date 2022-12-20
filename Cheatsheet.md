# CHEATSHEET - Typescript

## Conceitos básicos de Javascript a serem utilizados

- Declarações com **var**:
  - Escopo _global_ ou _funcional_;
  - Podem ser re-declaradas dentro de seu próprio escopo;
  - Podem ser atualizadas dentro de seu próprio escopo;
- Declarações com **let**:
  - Escopo _por bloco_ (trecho de código entre chaves);
  - **NÃO** podem ser re-declaradas dentro de seu próprio escopo;
  - Podem ser atualizadas dentro de seu próprio escopo;
- Declarações com **const**:
  - Escopo _por bloco_ (trecho de código entre chaves);
  - **NÃO** podem ser re-declaradas dentro de seu próprio escopo;
  - **NÃO** podem ser atualizadas dentro de seu próprio escopo;
  - Devem ser inicializadas no momento da declaração;

## Seção 01

- Typescript = Javascript + [Type System];
- Objetivo: buscar erros durante o desenvolvimento;
- Não afeta desempenho;
- Configurando NPM para trabalhar com Typescript: **npm install -g typescript ts-node**;
- Módulo "typescript" instala o compilador Typescript, executável com o comando **tsc \<arquivo.ts\>**;
- Módulo "ts-node" instala o compilador/executor de arquivos Typescript com o comando **ts-node \<arquivo.ts\>**;

## Seção 02

- **type**: atalho para descrever propriedades e funções que uma variável tem;

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
- Para satisfazer uma condição, um argumento de função precisa satisfazer apenas o _mínimo_ que a interface descreve;
- Sempre que possível, argumentos de função devem ser definidos com interfaces para aumentar a reusabilidade;

## Seção 08

- Classe: regra que define as propriedades e funções de um objeto;
- Segue premissas básicas de orientação a objetos (herança, contructor, modificadores de acesso, etc);
- Interface + Classe = reusabilidade;

## Seção 09 (projeto _maps_)

- Typescript segue alguns princípios básicos de padrões de projeto:
  - Uma definição de classe por arquivo;
  - Arquivos que iniciam com letra **maúscula** representam classes a serem exportadas para uso em outros arquivos;
  - Arquivos que iniciam com letra **minúscula** normalmente representam arquivos com lógica de funcionamento;
  - Um arquivo de definição de classe normalmente também definem uma interface que contém o mínimo que outras classes devem ter para trabalharem com ela;
  - Outras classes podem implementar outra interface com o auxílio do comando _implements_, que assegura a conformidade daquela classe com a interface da outra classe;
- Bibliotecas **Javascript** do _Node.js_ podem ser importadas com **import**;
- Usualmente, componentes Javascript importados devem ter suas definições de tipo para não gerarem warnings e erros no código Typescript. Por isso, pode ser necessário instalar **Arquivos de definição de tipo**;
- Arquivos de definição de tipos podem ser importados incluindo componentes _@types/\<nome_da_biblioteca\>_ (consultar o repositório no _Node.js_ em _www.npmjs.com_ para maiores detalhes) com o comando _npm install @types/\<nome_da_biblioteca\>_;
- Classes definidas em um arquivo podem ser usadas em outros arquivos com o comando **import**;
- O arquivo Typescrit que contém classes e outros recursos que podem ser utilizados devem ser disponibilizados com o comando **export**;
- O modificador **default** no comando _export_ faz com que o recurso disponibilizado seja importado por padrão quando for invocado em um comando _import_, e nesse caso omite-se as chaves. Recursos exportados sem _default_ devem ser incluídos no _import_ entre chaves;
- Os recursos importados podem ser referenciados por um _alias_ com o comando **as** (exemplo: "import { Classe as C } from '\<nome_do_arquivo\>'"). Recursos exportados com _default_ podem ser invocados direto com _alias_ (sem o _as_ - exemplo: "import C from '\<nome_do_arquivo\>'");

## Seção 10 (projeto _sort_)

- Comandos interessantes para o compilador Typescript:
  - **tsc --init**: cria um arquivo de configuração _tsconfig.json_ que configura o processo de compilação;
  - **tsc -w**: compilação contínua (disparada após detecção de alguma mudança em um arquivo);
- Configurações e dependências _nodejs_ para compilação e execução paralela:
  - **npm init -y**: configura um projeto nodejs com a criação do _package.json_;
  - **nodemon**: dependência para executar continuamente um script Javascript;
  - **concurrently**: dependência para executar comandos paralelamente;
- Scripts do _package.json_:
  - **start:build**: "tsc -w" (compilação permanente);
  - **start:run**: "nodemon build/index.js" (execução permanente),
  - **start**: "concurrently npm:start:*" (execução simultânea dos dois outros scripts);
- **Type Guards**: especificação de tipos para variáveis com dois ou mais tipos (definidas com "|"):
  - **typeof \<variavel\> === '\<tipo\>'**: quando **tipo** for _number_, _string_, _boolean_ ou _symbol_;
  - **\<variavel\> instanceof '\<tipo\>'**: para demais tipos e objetos;
- **get**: define um método como uma propriedade;
- Classes podem herdar outras com o comando _extends_;
- Se a classe que herda outra classe tiver um construtor específico declarado, deverá chamar explicitamente o construtor da classe herdada com o método _super()_;
- Classes Abstratas x Interfaces
  - Ambas definem um "contrato" entre diferentes classes;
  - Interfaces promovem acoplamento fraco. Classes abstratas promovem acoplamento forte;
  - Interfaces são usadas quando diferentes objetos pouco relacionados podem ter algumas características em comum;
  - Classes abstratas são usadas para definir um conjunto de propriedades em comum que objetos parecidos devem ter;
  - Normalmente, a primeira abordagem para definir similaridades entre classes é a interface, refatorando o código depois para classes abstratas se necessário;

## Seção 11 (projeto _stats_)

- Assim como componentes **Javascript** importados, componentes nativos/padrão do _Node.js_ também devem ter suas definições de tipo para não gerarem warnings e erros no código Typescript. Elas devem ser importadas com o comando _npm install @types/node_;
- Funções úteis do tipo Array:
  - **map**: itera sobre os elementos de um array, executando uma função passada por parâmetro em cada um deles que retorna uma versão modificada do elemento (que inclusive pode ser de tipo diferente do array original). Retorna um novo array com o resultado de cada iteração dos elementos;
  - **forEach**: itera sobre os elementos de um array, executando uma função sem retorno passada por parâmetro em cada um deles. Não retorna nada;
- Typescript (e não Javascript) suportam _enums_, e podem ser usados como tipo para definição de variáveis, retorno de funções, etc;
- _Enums_ em Typescript devem ser usados primariamente como informação adicional, sinalizando a outros desenvolvedores que os valores da _enum_ estão relacionados e são conhecidos em tempo de compilação. Isso porque, no fundo, _enums_ serão convertidos para um array de chave/valor no Javascript, não proporcionando nenhum ganho de desempenho;
- **Type Assertions**: uso da palavra chave _as_ para que uma variável seja considerada como de um tipo específico (por exemplo, uma string ser considerada como um dos valores possíveis de uma _enum_);
- **Generics**: a fim de promover o reúso de código, o uso de _Generics_ fornece uma segunda camada de desacoplamento, onde uma classe pode ser definida com tipos parametrizados em vez de tipos fixos (assim como argumentos de funções);
- _Generics_ podem ter qualquer nome, mas por convenção, o nome é "T";
- Herança X Composição:
  - Herança: relação do tipo "X _é um_ Y" (LeitorDePartidas **é um** LeitorCsv). Implementação com classes abstratas;
  - Composição: relação do tipo "X _tem um_ Y" (LeitorDePartidas **tem um** LeitorCsv). Implementação com interfaces;
  - De acordo com especialistas em Padrões de Projeto: **Dar preferência a Composição do que Herança**;
  - Conceito de Composição em Padrões de Projeto: um objeto é composto por outros com atribuições e comportamentos **delegados**;
- Classes em Typescript também aceitam métodos estáticos;

## Seção 12

- Ao declarar uma classe com Generics, o Typescript pode fazer inferência de tipo;
- Funções também podem conter Generics;
- Generics podem conter _constrains_, com o intuito de garantir que o Generic contenha no mínimo um conjunto específico de propriedades e métodos, definidos por uma interface;

## Seção 13

- Interfaces podem ter propriedades e funções opcionais;
