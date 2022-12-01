// Definição de classe
class Veiculo {
    // O Construtor escrito como atalho abaixo equivale a:
    // cor: string;
    // constructor(cor: string) {
    //     this.cor = cor;
    // }
    constructor(public cor: string) {}

    protected buzinar(): void {
        console.log("Beep beep!");
    }
}

// Função "buzinar" não pode ser chamada de fora, por ser protected
const caminhao: Veiculo = new Veiculo("prata");
// caminhao.buzinar(); --> ERRO
console.log(`Veiculo é de cor ${caminhao.cor}`);

// Definição de outra classe, que herda Veiculo
class Carro2 extends Veiculo {
    // Se a classe filha tiver seu próprio construtor, o construtor da classe pai deve ser chamado com super()
    constructor(cor: string, public qtdRodas: number) {
        super(cor);
    }

    private dirigir(): void {
        console.log("Vruuuuuuuuuuuuuuuuuum!");
    }
    public iniciarDirecao(): void {
        this.buzinar(); // -- > Pode ser acessado dentro de Veiculo e de Carro2
        this.dirigir(); // --> Pode ser acessado somente dentro de Carro2
    }
}

const carro = new Carro2("branca", 4);
// carro.dirigir(); --> ERRO, dirigir() é privado de Carro
// carro.buzinar(); --> ERRO, buzinar() é protected de Veiculo
console.log(`O numero de rodas de carro é ${carro.qtdRodas}`);
carro.iniciarDirecao(); // --> OK, iniciarDirecao() é public
