import UndmedApi from "../api/undmed_Api.js";
import UtilidadesCj from "../utils/utilitarios.js";

class UndmedControlador {
  constructor() {
    this.undmedApi = new UndmedApi();
  }

  getUndmed = async (req, res) => {
    const { id } = req.params;
    try {
      const result = await this.undmedApi.getUndmed(id);
      return res.send(result);
    } catch (error) {
      throw new Error(error);
    }
  };

  getUndmedAll = async (req, res) => {
    const { body } = req;
    try {
      const result = await this.undmedApi.getUndmedAll(body.valor);
      return res.send(result);
    } catch (error) {
      throw new Error(error);
    }
  };

  deleteUndmed = async (req, res) => {
    const { body } = req;
    try {
      const eliminados = await this.undmedApi.deleteUndmed(body.id);
      return res.send({ eliminados });
    } catch (error) {
      //return error;
      throw new Error(error);
    }
  };

  updateUndmed = async (req, res) => {
    const { body } = req;
    try {
      let undmed = await this.undmedApi.updateUndmed(body);
      return res.send(undmed);
    } catch (error) {
      throw new Error(error);
    }
  };

  saveUndmed = async (req, res) => {
    const { body } = req;
    try {
      const result = await this.undmedApi.getIdUndmed(UtilidadesCj.getAnoMes());
      const nuevoId = UtilidadesCj.generarID(8, result.id_undmed);
      const registro = { id_undmed: nuevoId, ...body };
      const undmed = await this.undmedApi.saveUndmed(registro);
      return res.send(undmed);
    } catch (error) {
      throw new Error(error);
    }
  };
}

export default UndmedControlador;
