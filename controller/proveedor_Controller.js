import ProveedorApi from "../api/proveedor_Api.js";
import UtilidadesCj from "../utils/utilitarios.js";

class ProveedorControlador {
  constructor() {
    this.proveedorApi = new ProveedorApi();
  }

  getProveedores = async (req, res) => {
    const { id } = req.params;
    try {
      const proveedores = await this.proveedorApi.getProveedores(id);
      return res.send(proveedores);
    } catch (error) {
      throw new Error(error);
    }
  };

  getProveedoresAll = async (req, res) => {
    const { body } = req;
    try {
      const proveedores = await this.proveedorApi.getProveedoresAll(body.valor);
      return res.send(proveedores);
    } catch (error) {
      throw new Error(error);
    }
  };

  deleteProveedor = async (req, res) => {
    const { body } = req;
    try {
      const eliminados = await this.proveedorApi.deleteProveedor(body.id);
      return res.send({ eliminados });
    } catch (error) {
      throw new Error(error);
    }
  };

  updateProveedor = async (req, res) => {
    const { body } = req;
    try {
      const proveedor = await this.proveedorApi.updateProveedor(body);
      return res.send(proveedor);
    } catch (error) {
      throw new Error(error);
    }
  };

  saveProveedor = async (req, res) => {
    const { body } = req;
    try {
      const result = await this.proveedorApi.getIdProveedor(UtilidadesCj.getAnoMes());
      const nuevoId = UtilidadesCj.generarID(8, result.id_proveedor);
      const registro = { id_proveedor: nuevoId, ...body };
      let proveedor = await this.proveedorApi.saveProveedor(registro);
      return res.send(proveedor);
    } catch (error) {
      throw new Error(error);
    }
  };
}

export default ProveedorControlador;
