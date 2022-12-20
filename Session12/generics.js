var ArrayQualquer = /** @class */ (function () {
    function ArrayQualquer(colecao) {
        this.colecao = colecao;
    }
    ArrayQualquer.prototype.get = function (indice) {
        return this.colecao[indice];
    };
    return ArrayQualquer;
}());
// Type inference em Generics
// Equivale a "const array = new ArrayQualquer<string>(["AAA", "BBB", "CCC"]);"
var array = new ArrayQualquer(["AAA", "BBB", "CCC"]);
// Funções com Generics
function imprimirArray(array) {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
imprimirArray([1, 2, 3]);
