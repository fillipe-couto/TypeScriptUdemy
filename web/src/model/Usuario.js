"use strict";
exports.__esModule = true;
exports.Usuario = void 0;
var axios_1 = require("axios");
var Usuario = /** @class */ (function () {
    function Usuario(dados) {
        this.dados = dados;
    }
    Usuario.prototype.get = function (nomeDado) {
        return this.dados[nomeDado];
    };
    Usuario.prototype.set = function (novoDado) {
        Object.assign(this.dados, novoDado);
    };
    Usuario.prototype.obter = function () {
        var _this = this;
        axios_1["default"].get("http://localhost:3000/users/".concat(this.get("id"))).then(function (response) {
            _this.set(response.data);
        });
    };
    Usuario.prototype.persistir = function () {
        var id = this.get("id");
        if (id) {
            axios_1["default"].put("http://localhost:3000/users/".concat(id), this.dados).then(function (response) { });
        }
        else {
            axios_1["default"].post("http://localhost:3000/users", this.dados).then(function (response) { });
        }
    };
    return Usuario;
}());
exports.Usuario = Usuario;
