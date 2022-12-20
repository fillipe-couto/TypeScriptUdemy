type FuncaoDeEvento = () => void;

interface Dado {
    nome?: string;
    idade?: number;
}

export class Usuario {
    eventos: { [chave: string]: FuncaoDeEvento[] } = {};

    constructor(private dados: Dado) {}

    get(nomeDado: string): string | number {
        return this.dados[nomeDado];
    }
    set(novoDado: Dado): void {
        Object.assign(this.dados, novoDado);
    }

    quandoOcorrer(nomeEvento: string, funcao: FuncaoDeEvento): void {
        const funcoesEvento = this.eventos[nomeEvento] || [];
        funcoesEvento.push(funcao);
        this.eventos[nomeEvento] = funcoesEvento;
    }

    tratarEvento(nomeEvento: string): void {
        (this.eventos[nomeEvento] || []).forEach((funcaoEvento) => {
            funcaoEvento();
        });
    }
}
