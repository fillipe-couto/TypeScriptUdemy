import { Usuario } from "./Usuario";
import { Empresa } from "./Empresa";
import { Mapa } from "./Mapa";

const mapa = new Mapa("divMapa");
const usuario = new Usuario();
const empresa = new Empresa();
mapa.adicionarMarcador(usuario);
mapa.adicionarMarcador(empresa);
