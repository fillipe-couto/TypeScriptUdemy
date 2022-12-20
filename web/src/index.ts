import { Usuario } from "./model/Usuario";

const usuario = new Usuario({ nome: "Fillipe", idade: 37 });
usuario.quandoOcorrer("abc", () => {
    console.log("Evento abc#1");
});
usuario.quandoOcorrer("xyz", () => {
    console.log("Evento xyz#1");
});
usuario.quandoOcorrer("abc", () => {
    console.log("Evento abc#2");
});

usuario.tratarEvento("xyz");
usuario.tratarEvento("123");
usuario.tratarEvento("abc");
