import RolApi from "../api/rol_Api.js";
import UtilidadesCj from "../utils/utilitarios.js";

class RolControlador {
  constructor() {
    this.rolApi = new RolApi();
  }

  getRoles = async (req, res) => {
    const { body } = req;
    try {
      let roles = await this.rolApi.getRoles(body.id_rol);
      return res.send(roles);
    } catch (error) {
      throw new Error(error);
    }
  };

  deleteRol = async (req, res) => {
    const { body } = req;
    try {
      let roles = await this.rolApi.deleteRol(body.id_rol);
      return res.send("Rol Eliminado: " + roles);
    } catch (error) {
      throw new Error(error);
    }
  };

  updateRol = async (req, res) => {
    const { body } = req;
    try {
      let rol = await this.rolApi.updateRol(body);
      return res.send({ Resultado_Actualización: rol });
    } catch (error) {
      throw new Error(error);
    }
  };

  saveRol = async (req, res) => {
    const { body } = req;
    try {
      const result = await this.rolApi.getIdRol(
        UtilidadesCj.getAnoMes()
      );
      const nuevoId = UtilidadesCj.generarID(8, result.id_rol);
      const registro = { id_rol: nuevoId, ...body };
      let rol = await this.rolApi.saveRol(registro);
      return res.send({ Resultado_Registro: rol });
    } catch (error) {
      throw new Error(error);
    }
  };


}
export default RolControlador;
