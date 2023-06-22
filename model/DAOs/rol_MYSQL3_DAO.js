import dbInstance from "../../connection/connMysql.js";
import RolesBaseDAO from "./rol_Base_DAO.js";
import moment from "moment";

class RolMYSQL extends RolesBaseDAO {
  constructor() {
    super();
    console.log("instanciamos conexion en lista roles");
    this._db = dbInstance.getConnection();
  }

  getIdRol = async (anomes) => {
    try {
      let result = await this._db
        .select("id_rol")
        .from("roles")
        .where("id_rol", "like", `${anomes}%`)
        .orderBy("id_rol", "desc")
        .first();
      return result;
    } catch (error) {
      throw new Error(error);
    }
  };

  getRoles = async (id_rol) => {
    try {
      const rows = await this._db.select("*").from("roles").where("id_rol", id_rol);
      const roles = rows.map((row) => {
        return {
          id_rol: row["id_rol"],
          nombre_rol: row["nombre_rol"],
          desc_rol: row["desc_rol"],
          level: row["level"],
        };
      });
      return roles;
    } catch (error) {
      throw new Error(error);
    }
  };

  getRolesAll = async (valor) => {
    try {
      const rows = await this._db
        .select("*")
        .from("roles")
        .where("nombre_rol", "like", `%${valor}%`)
        .orWhere("desc_rol", "like", `%${valor}%`)
        .limit(100)
        .orderBy("id_rol", "asc");
      const roles = rows.map((row) => {
        return {
          id_rol: row["id_rol"],
          nombre_rol: row["nombre_rol"],
          desc_rol: row["desc_rol"],
          level: row["level"],
        };
      });
      return roles;
    } catch (error) {
      throw new Error(error);
    }
  };

  saveRol = async (obj) => {
    try {
      await this._db("roles").insert(obj);
      return obj;
    } catch (error) {
      throw new Error(error);
    }
  };

  updateRol = async (obj) => {
    try {
      const rows = await this._db("roles")
        .where("id_rol", "=", obj.id_rol)
        .update({
          nombre_rol: obj.nombre_rol,
          desc_rol: obj.desc_rol,
          level: obj.level,
          updated_at: moment().format("YYYY-MM-DD HH:mm:ss"),
        });
      return rows;
    } catch (error) {
      throw new Error(error);
    }
  };

  deleteRol = async (id_rol) => {
    try {
      const rows = await this._db("roles").where("id_rol", "=", id_rol).del();
      return rows;
    } catch (error) {
      if (error.errno === 1451) {
        return {
          code: error.code,
          errno: error.errno,
        };
      } else {
        throw new Error(error);
      }
    }
  };
}

export default RolMYSQL;
