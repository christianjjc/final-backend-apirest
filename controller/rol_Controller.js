import RolApi from "../api/rol_Api.js";
import UtilidadesCj from "../utils/utilitarios.js";

class RolControlador {
  constructor() {
    this.rolApi = new RolApi();
  }

  getRoles = async (req, res) => {
    const { id } = req.params;
    try {
      const roles = await this.rolApi.getRoles(id);
      return res.send(roles);
    } catch (error) {
      throw new Error(error);
    }
  };

  getRolesAll = async (req, res) => {
    const { body } = req;
    try {
      const roles = await this.rolApi.getRolesAll(body.valor);
      return res.send(roles);
    } catch (error) {
      throw new Error(error);
    }
  };

  deleteRol = async (req, res) => {
    const { body } = req;
    try {
      const eliminados = await this.rolApi.deleteRol(body.id);
      return res.send({ eliminados });
    } catch (error) {
      //return error;
      throw new Error(error);
    }
  };

  updateRol = async (req, res) => {
    const { body } = req;
    try {
      let rol = await this.rolApi.updateRol(body);
      return res.send(rol);
    } catch (error) {
      throw new Error(error);
    }
  };

  saveRol = async (req, res) => {
    const { body } = req;
    try {
      const result = await this.rolApi.getIdRol(UtilidadesCj.getAnoMes());
      const nuevoId = UtilidadesCj.generarID(8, result.id_rol);
      const registro = { id_rol: nuevoId, ...body };
      let rol = await this.rolApi.saveRol(registro);
      return res.send(rol);
    } catch (error) {
      throw new Error(error);
    }
  };
}

export default RolControlador;
