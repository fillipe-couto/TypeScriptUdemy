"use strict";
exports.__esModule = true;
var url = "https://jsonplaceholder.typicode.com/todos/1";
// axios.get(url).then(resposta => {
//     console.log(resposta.data);
// });
var tarefa = {
    id: 123,
    titulo: "Lavar a roupa",
    concluida: true
};
console.log("\n    ID da tarefa: ".concat(tarefa.id, "\n    T\u00EDtulo: ").concat(tarefa.titulo, "\n    Conclu\u00EDdo? ").concat(tarefa.concluida ? "SIM" : "NÃO", "\n"));
