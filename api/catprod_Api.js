import config from "../config.js";
import CatprodFactoryDAO from "../model/DAOs/catprod_Factory.js";
import Catprod from "../model/models/catprod_Model.js";

class CatprodApi {
  constructor() {
    this.catprodDAO = CatprodFactoryDAO.get(config.TIPO_PERSISTENCIA);
  }

  async getIdCatprod(anomes) {
    return await this.catprodDAO.getIdCatprod(anomes);
  }

  async saveCatprod(obj) {
    const pasa = CatprodApi.asegurarCatprodValida(obj, true);
    if (pasa == true) {
      return {
        error: false,
        ...(await this.catprodDAO.saveCatprod(obj)),
      };
    } else {
      return pasa;
    }
  }

  async updateCatprod(obj) {
    const pasa = CatprodApi.asegurarCatprodValida(obj, true);
    if (pasa == true) {
      return {
        error: false,
        ...(await this.catprodDAO.updateCatprod(obj)),
      };
    } else {
      return pasa;
    }
  }

  async getCatprod(id_categoria_prod) {
    return await this.catprodDAO.getCatprod(id_categoria_prod);
  }

  async getCatprodAll(valor) {
    return await this.catprodDAO.getCatprodAll(valor);
  }

  async deleteCatprod(id_categoria_prod) {
    try {
      return await this.catprodDAO.deleteCatprod(id_categoria_prod);
    } catch (error) {
      return { errorApi: true, error: error };
    }
  }

  static asegurarCatprodValida(catprod, requerido) {
    try {
      Catprod.validar(catprod, requerido);
      return true;
    } catch (error) {
      return {
        error: true,
        mensaje: "El registro posee un formato invalido y/o faltan datos: ",
        detalle_error: error.details[0].message,
      };
    }
  }
}

export default CatprodApi;
