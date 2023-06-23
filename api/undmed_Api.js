import config from "../config.js";
import UndmedFactoryDAO from "../model/DAOs/undmed_Factory.js";
import Undmed from "../model/models/undmed_Model.js";

class UndmedApi {
  constructor() {
    this.undmedDAO = UndmedFactoryDAO.get(config.TIPO_PERSISTENCIA);
  }

  async getIdUndmed(anomes) {
    return await this.undmedDAO.getIdUndmed(anomes);
  }

  async getUndmed(id_undmed) {
    return await this.undmedDAO.getUndmed(id_undmed);
  }

  async getUndmedAll(valor) {
    return await this.undmedDAO.getUndmedAll(valor);
  }

  async saveUndmed(obj) {
    const pasa = UndmedApi.asegurarUndmedValida(obj, true);
    if (pasa == true) {
      return {
        error: false,
        ...(await this.undmedDAO.saveUndmed(obj)),
      };
    } else {
      return pasa;
    }
  }

  async updateUndmed(obj) {
    const pasa = UndmedApi.asegurarUndmedValida(obj, false);
    if (pasa == true) {
      return {
        error: false,
        ...(await this.undmedDAO.updateUndmed(obj)),
      };
    } else {
      return pasa;
    }
  }

  async deleteUndmed(id_undmed) {
    try {
      return await this.undmedDAO.deleteUndmed(id_undmed);
    } catch (error) {
      return { errorApi: true, error };
    }
  }

  static asegurarUndmedValida(undmed, requerido) {
    try {
      Undmed.validar(undmed, requerido);
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

export default UndmedApi;
