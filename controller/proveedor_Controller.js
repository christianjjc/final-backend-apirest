import ProveedorApi from "../api/proveedor_Api.js";

class ProveedorControlador {
  constructor() {
    this.proveedorApi = new ProveedorApi();
  }

  getProveedores = async (req, res) => {
    const { body } = req;
    try {
      let id = body.id;
      let proveedores = await this.proveedorApi.getProveedores(id);
      return res.send(proveedores);
    } catch (error) {
      console.log("Error obtener Proveedor - Controllador", error);
    }
  };

  deleteProveedor = async (req, res) => {
    const { body } = req;
    try {
      let id = body.id;
      let proveedores = await this.proveedorApi.deleteProveedor(id);
      return res.send("Proveedor Eliminado: " + id);
    } catch (error) {
      console.log("Error eliminar Proveedor - Controllador", error);
    }
  };

  updateProveedor = async (req, res) => {
    const { body } = req;
    try {
      let proveedor = await this.proveedorApi.updateProveedor(body);
      return res.send({Proveedor_Actualizado: proveedor });
    } catch (error) {
      console.log("Error actualizar Proveedor - Controllador", error);
    }
  };



}

export default ProveedorControlador;
