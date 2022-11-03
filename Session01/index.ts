import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Tarefa {
    id: number;
    titulo: string;
    concluida: boolean;
}

// axios.get(url).then(resposta => {
//     console.log(resposta.data);
// });

const tarefa : Tarefa = {
    id: 123,
    titulo: "Lavar a roupa",
    concluida: true
};

console.log(`
    ID da tarefa: ${tarefa.id}
    Título: ${tarefa.titulo}
    Concluído? ${tarefa.concluida ? "SIM" : "NÃO"}
`);
