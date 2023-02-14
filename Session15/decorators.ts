class Barco {
    cor: string = "vermelho";

    get corFormatada(): string {
        return `A cor do barco é ${this.cor}`;
    }

    @logError("Mensagem bonitinha!")
    pilotar(): void {
        throw new Error();
        console.log("Swish swish!");
    }
}

// Método Factory
function logError(mensagem: string) {
    // Implementação do Decorator
    return function (alvo: any, chave: string, props: PropertyDescriptor): void {
        const metodo = props.value;
        props.value = () => {
            try {
                metodo();
            } catch {
                console.log(`Ops! Deu erro... mensagem: ${mensagem}`);
            }
        };
    };
}

new Barco().pilotar();
