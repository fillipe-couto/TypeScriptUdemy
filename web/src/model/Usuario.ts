import { Evento } from "./Evento";
import { SincRemota } from "./SincRemota";

export interface Dado {
    id?: number;
    nome?: string;
    idade?: number;
}

const servidor = "http://localhost:3030/usuarios";

export class Usuario {
    public eventos = new Evento();
    public sincronizar = new SincRemota<Dado>(servidor);
}
