export const dataEmStringParaObjetoDate = (dataEmString: string): Date => {
    const componentesDaData = dataEmString.split("/").map((valor: string): number => {
        return parseInt(valor);
    });
    return new Date(componentesDaData[2], componentesDaData[1] - 1, componentesDaData[0]);
};
