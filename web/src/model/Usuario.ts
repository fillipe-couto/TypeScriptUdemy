import { Api } from "./Api";
import { AtributosImpl } from "./AtributosImpl";
import { EventosImpl } from "./EventosImpl";
import { Atributos, Eventos, Identificavel, Modelo, Sincronizacao } from "./Modelo";

const servidor = "http://localhost:3000/usuarios";

export interface DadosUsuario extends Identificavel {
    id?: number;
    nome?: string;
    idade?: number;
}

export class Usuario extends Modelo<DadosUsuario> {
    private constructor(atributos: Atributos<DadosUsuario>, eventos: Eventos, sinc: Sincronizacao<DadosUsuario>) {
        super(atributos, eventos, sinc);
    }
    public static criarUsuario(atributos: DadosUsuario): Usuario {
        return new Usuario(new AtributosImpl(atributos), new EventosImpl(), new Api<DadosUsuario>(servidor));
    }
}
