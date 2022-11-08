const perfil = {
    nome: "Fillipe",
    idade: 37,
    coordenadas: {
        lat: -126,
        lng: 279
    },
    setIdade(novaIdade: number): void {
        this.idade = novaIdade;
    }
}

// Desconstrução:
const { idade, coordenadas: { lat, lng} }: { idade: number, coordenadas: {lat: number, lng: number} } = perfil;
console.log(idade);
console.log(lat);
console.log(lng);
