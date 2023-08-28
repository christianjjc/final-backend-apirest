import CatprodApi from "../api/catprod_Api.js";
import UtilidadesCj from "../utils/utilitarios.js";

class CatprodControlador {
  constructor() {
    this.catprodApi = new CatprodApi();
  }

  getCatprod = async (req, res) => {
    const { id } = req.params;
    try {
      let result = await this.catprodApi.getCatprod(id);
      return res.send(result);
    } catch (error) {
      throw new Error(error);
    }
  };

  getCatprodAll = async (req, res) => {
    const { body } = req;
    try {
      let result = await this.catprodApi.getCatprodAll(body.valor);
      return res.send(result);
    } catch (error) {
      throw new Error(error);
    }
  };

  deleteCatprod = async (req, res) => {
    const { body } = req;
    try {
      let eliminados = await this.catprodApi.deleteCatprod(body.id);
      return res.send({ eliminados });
    } catch (error) {
      throw new Error(error);
    }
  };

  updateCatprod = async (req, res) => {
    const { body } = req;
    try {
      const result = await this.catprodApi.updateCatprod(body);
      return res.send(result);
    } catch (error) {
      throw new Error(error);
    }
  };

  saveCatprod = async (req, res) => {
    const { body } = req;
    try {
      const result = await this.catprodApi.getIdCatprod(UtilidadesCj.getAnoMes());
      const nuevoId = UtilidadesCj.generarID(8, result.id_categoria_prod);
      const registro = { id_categoria_prod: nuevoId, ...body };
      let catprod = await this.catprodApi.saveCatprod(registro);
      return res.send(catprod);
    } catch (error) {
      throw new Error(error);
    }
  };
}
export default CatprodControlador;
