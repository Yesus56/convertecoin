"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class Converter_money {
  constructor(moneda1, valormoneda1, cantidadAconvertir, moneda2, valormoneda2) {
    this.moneda1 = moneda1; //la moenda que se desaa cambiar

    this.valormoneda1 = valormoneda1; // el valor de la moneda que se desea cambiar

    this.moneda2 = moneda2; // moenda que va a salir convertida

    this.valormoneda2 = valormoneda2; // valor de la moenda que va a salir convertida

    this.cantidadAconvertir = cantidadAconvertir; // la cantidad que se desea convertir
  }

  calcular() {
    //console.log(this.moneda1 == "USD");
    //console.log(this.moneda2 == "USD");
    if (this.moneda1 == "USD" || this.moneda2 == "USD") {
      let data = this.monedabase(this.moneda1);
      return data;
    } else {
      this.monedaAlternaAndCrypto();
    }
  } //moneda base se utiliza para convertir cualquier moneda a dolares


  monedabase(moneda) {
    console.log(moneda == "USD");
    return !(moneda == "USD") ? this.multiplicar(this.cantidadAconvertir, this.valormoneda1) : this.dividir(this.cantidadAconvertir, this.valormoneda2);
  } //aqui se toma cualquier moneda se convierta  dollar y despues se cambia a la moneda deseada a cambiar


  monedaAlternaAndCrypto() {
    let ma = this.monedabase(this.moneda1);
    let data = this.dividir(ma, this.valormoneda2);
    return data;
  }

  multiplicar(valor1, valor2) {
    let m = valor1 * valor2;
    return m.toFixed(1);
  }

  dividir(valor1, valor2) {
    let d = valor1 / valor2;
    return d.toFixed(8);
  }

}

var _default = Converter_money;
exports.default = _default;