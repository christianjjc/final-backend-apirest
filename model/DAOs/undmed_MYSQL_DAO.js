import dbInstance from "../../connection/connMysql.js";
import UndmedBaseDAO from "./undmed_Base_DAO.js";
import moment from "moment";

class UndmedMYSQL extends UndmedBaseDAO {
  constructor() {
    super();
    this._db = dbInstance.getConnection();
  }

  getIdUndmed = async (anomes) => {
    try {
      const result = await this._db
        .select("id_undmed")
        .from("undmed")
        .where("id_undmed", "like", `${anomes}%`)
        .orderBy("id_undmed", "desc")
        .first();
      if (result) {
        return result;
      } else {
        return { id_undmed: `${anomes}0000` };
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  getUndmed = async (id) => {
    try {
      const rows = await this._db.select("*").from("undmed").where("id_undmed", id);
      const result = rows.map((row) => {
        return {
          id_undmed: row["id_undmed"],
          nombre_undmed: row["nombre_undmed"],
          abr: row["abr"],
        };
      });
      return result;
    } catch (error) {
      throw new Error(error);
    }
  };

  getUndmedAll = async (valor) => {
    try {
      const rows = await this._db
        .select("*")
        .from("undmed")
        .where("nombre_undmed", "like", `%${valor}%`)
        .limit(100)
        .orderBy("id_undmed", "asc");
      const result = rows.map((row) => {
        return {
          id_undmed: row["id_undmed"],
          nombre_undmed: row["nombre_undmed"],
          abr: row["abr"],
        };
      });
      return result;
    } catch (error) {
      throw new Error(error);
    }
  };

  saveUndmed = async (obj) => {
    try {
      await this._db("undmed").insert(obj);
      return obj;
    } catch (error) {
      throw new Error(error);
    }
  };

  updateUndmed = async (obj) => {
    try {
      const rows = await this._db("undmed")
        .where("id_undmed", "=", obj.id_undmed)
        .update({
          nombre_undmed: obj.nombre_undmed,
          abr: obj.abr,
          updated_at: moment().format("YYYY-MM-DD HH:mm:ss"),
        });
      return rows;
    } catch (error) {
      throw new Error(error);
    }
  };

  deleteUndmed = async (id) => {
    try {
      const rows = await this._db("undmed").where("id_undmed", "=", id).del();
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

export default UndmedMYSQL;
