import moment from "moment";

class UtilidadesCj {
  static getAnoMes() {
    const fecha = moment();
    const anomes = fecha.format("YYMM");
    return anomes;
  }

  static generarID = (longitudTotal, ultimoId) => {
    const anioMes = moment().format("YYMM");
    const nuevaNumeracion = parseInt(ultimoId ? ultimoId.slice(-(longitudTotal - anioMes.length)) : 0);
    const ceros = "0".repeat(longitudTotal - anioMes.length);
    let nuevoID = anioMes + ceros;
    const numero = parseInt(nuevaNumeracion) + 1;
    const numeroConCeros = numero.toString().padStart(longitudTotal - anioMes.length, "0");
    nuevoID = anioMes + numeroConCeros;
    return nuevoID;
  };
}

export default UtilidadesCj;
