import ProveedorApi from "../api/proveedor_Api.js";
import UtilidadesCj from "../utils/utilitarios.js";

class ProveedorControlador {
  constructor() {
    this.proveedorApi = new ProveedorApi();
  }

  getProveedores = async (req, res) => {
    const { body } = req;
    try {
      let proveedores = await this.proveedorApi.getProveedores(body.id_proveedor);
      return res.send(proveedores);
    } catch (error) {
      console.log("Error obtener id proveedor - Controllador", error);
    }
  };

  deleteProveedor = async (req, res) => {
    const { body } = req;
    try {
      let proveedores = await this.proveedorApi.deleteProveedor(body.id_proveedor);
      return res.send("Proveedor Eliminado: " + body.id_proveedor);
    } catch (error) {
      console.log("Error eliminar Proveedor - Controllador", error);
    }
  };

  updateProveedor = async (req, res) => {
    const { body } = req;
    try {
      let proveedor = await this.proveedorApi.updateProveedor(body);
      return res.send({ Proveedor_Actualizado: proveedor });
    } catch (error) {
      console.log("Error actualizar Proveedor - Controllador", error);
    }
  };

  saveProveedor = async (req, res) => {
    const { body } = req;
    try {
      const result = await this.proveedorApi.getIdProveedor(
        UtilidadesCj.getAnoMes()
      );
      const nuevoId = UtilidadesCj.generarID(8, result.id_proveedor);
      const registro = { id_proveedor: nuevoId, ...body };
      let proveedor = await this.proveedorApi.saveProveedor(registro);
      return res.send({ Proveedor_Registrado: proveedor });
    } catch (error) {
      console.log("Error registrar Proveedor - Controllador", error);
    }
  };
}

export default ProveedorControlador;
