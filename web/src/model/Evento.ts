type FuncaoDeEvento = () => void;

export class Evento {
    eventos: { [chave: string]: FuncaoDeEvento[] } = {};

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
