import dbInstance from "../../connection/connMysql.js";
import CatprodBaseDAO from "./catprod_Base_Dao.js";
import moment from "moment";

class CatprodMYSQL extends CatprodBaseDAO {
  constructor() {
    super();
    this._db = dbInstance.getConnection();
  }

  getIdCatprod = async (anomes) => {
    try {
      const result = await this._db
        .select("id_categoria_prod")
        .from("categorias_prod")
        .where("id_categoria_prod", "like", `${anomes}%`)
        .orderBy("id_categoria_prod", "desc")
        .first();
      if (result) {
        return result;
      } else {
        return { id_categoria_prod: `${anomes}0000` };
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  getCatprod = async (id) => {
    try {
      const rows = await this._db.select("*").from("categorias_prod").where("id_categoria_prod", id);
      const result = rows.map((row) => {
        return {
          id_categoria_prod: row["id_categoria_prod"],
          nombre_categoria_prod: row["nombre_categoria_prod"],
        };
      });
      return result;
    } catch (error) {
      throw new Error(error);
    }
  };

  getCatprodAll = async (valor) => {
    try {
      const rows = await this._db
        .select("*")
        .from("categorias_prod")
        .where("nombre_categoria_prod", "like", `%${valor}%`)
        .limit(100)
        .orderBy("nombre_categoria_prod", "asc");
      const result = rows.map((row) => {
        return {
          id_categoria_prod: row["id_categoria_prod"],
          nombre_categoria_prod: row["nombre_categoria_prod"],
        };
      });
      return result;
    } catch (error) {
      throw new Error(error);
    }
  };

  saveCatprod = async (obj) => {
    try {
      await this._db("categorias_prod").insert(obj);
      return obj;
    } catch (error) {
      throw new Error(error);
    }
  };

  updateCatprod = async (obj) => {
    try {
      const rows = await this._db("categorias_prod")
        .where("id_categoria_prod", "=", obj.id_categoria_prod)
        .update({
          nombre_categoria_prod: obj.nombre_categoria_prod,
          updated_at: moment().format("YYYY-MM-DD HH:mm:ss"),
        });
      return rows;
    } catch (error) {
      throw new Error(error);
    }
  };

  deleteCatprod = async (id) => {
    try {
      const rows = await this._db("categorias_prod").where("id_categoria_prod", "=", id).del();
      return rows;
    } catch (error) {
      throw new Error(error);
    }
  };
}
export default CatprodMYSQL;
