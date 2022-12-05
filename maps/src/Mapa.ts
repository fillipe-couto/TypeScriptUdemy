export interface Localizavel {
    localizacao: {
        lat: number;
        lon: number;
    };
    conteudoDoPopUp(): string;
}

export class Mapa {
    private googleMap: google.maps.Map;

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0,
            },
        });
    }

    adicionarMarcador(entidade: Localizavel): void {
        const marcador = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: entidade.localizacao.lat,
                lng: entidade.localizacao.lon,
            },
        });

        marcador.addListener("click", (): void => {
            const infoWindow = new google.maps.InfoWindow({
                content: entidade.conteudoDoPopUp(),
            });
            infoWindow.open(this.googleMap, marcador);
        });
    }
}
