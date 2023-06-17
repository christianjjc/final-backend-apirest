import ProveedoresBaseDAO from "./proveedor_Base_DAO.js";
import knex from "knex";
import config from "../../config.js";
import moment from "moment";

class ProveedorSQLITE3 extends ProveedoresBaseDAO {
  constructor() {
    super();
    (async () => {
      console.log("Conectando a db... SQLITE3");
      const db = knex({
        client: "sqlite3",
        connection: {
          filename: config.SQLITE3_PATH,
        },
        useNullAsDefault: true,
      });
      console.log("...conectado!");
      this._db = db;
    })();
  }

  getProveedores = async (id_proveedor) => {
    try {
      const rows = await this._db.select("*").from("proveedores").where("id_proveedor", id_proveedor);
      const proveedor = rows.map((row) => {
        return {
          id_proveedor: row["id_proveedor"],
          ruc: row["ruc"],
          razon_social: row["razon_social"],
          direccion: row["direccion"],
          telefono: row["telefono"],
          que_vende: row["que_vende"],
        };
      });
      return proveedor;
    } catch (error) {
      throw new Error(error);
    }
  };

  getProveedoresAll = async (valor) => {
    try {
      let rows = [];
      if (valor != "") {
        console.log("valor lleno---> ", valor);
        rows = await this._db
          .select("*")
          .from("proveedores")
          .where("razon_social", "like", `%${valor}%`)
          .orWhere("ruc", "like", `%${valor}%`)
          .orWhere("que_vende", "like", `%${valor}%`)
          .limit(100)
          .orderBy("razon_social", "asc");
      } else {
        console.log("valor vacio---> ", valor);
        rows = await this._db.select("*").from("proveedores").limit(100).orderBy("razon_social", "asc");
      }
      const proveedores = rows.map((row) => {
        return {
          id_proveedor: row["id_proveedor"],
          ruc: row["ruc"],
          razon_social: row["razon_social"],
          direccion: row["direccion"],
          telefono: row["telefono"],
          que_vende: row["que_vende"],
        };
      });
      return proveedores;
    } catch (error) {
      throw new Error(error);
    }
  };

  getIdProveedor = async (anomes) => {
    try {
      let result = await this._db
        .select("id_proveedor")
        .from("proveedores")
        .where("id_proveedor", "like", `${anomes}%`)
        .orderBy("id_proveedor", "desc")
        .first();
      return result;
    } catch (error) {
      throw new Error(error);
    }
  };

  saveProveedor = async (obj) => {
    try {
      await this._db("proveedores").insert(obj);
      return obj;
    } catch (error) {
      throw new Error(error);
    }
  };

  updateProveedor = async (obj) => {
    try {
      const rows = await this._db("proveedores")
        .where("id_proveedor", "=", obj.id_proveedor)
        .update({
          ruc: obj.ruc,
          razon_social: obj.razon_social,
          direccion: obj.direccion,
          telefono: obj.telefono,
          que_vende: obj.que_vende,
          updated_at: moment().format("YYYY-MM-DD HH:mm:ss"),
        });
      return rows;
    } catch (error) {
      throw new Error(error);
    }
  };

  deleteProveedor = async (id_proveedor) => {
    try {
      const rows = await this._db("proveedores").where("id_proveedor", "=", id_proveedor).del();
      return rows;
    } catch (error) {
      //throw new Error(error);
      console.error("errro dao -----> ", error);
    }
  };
}
export default ProveedorSQLITE3;
