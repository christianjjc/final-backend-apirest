import knex from "knex";
import config from "../../config.js";
import ProveedoresBaseDAO from "./proveedor_Base_DAO.js";

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
      console.log("conectado!");
      this._db = db;
    })();
  }

  getProveedores = async (id_proveedor) => {
    try {
      if (id_proveedor) {
        const rows = await this._db
          .select("*")
          .from("proveedores")
          .where("id_proveedor", id_proveedor);
        const proveedor = rows.map((row) => {
          return {
            id_proveedor: row["id_proveedor"],
            ruc: row["ruc"],
            razon_social: row["razon_social"],
            direccion: row["direccion"],
          };
        });
        return proveedor;
      } else {
        const rows = await this._db
          .select("*")
          .from("proveedores")
          .limit(100)
          .orderBy("id_proveedor", "asc");
        const proveedores = rows.map((row) => {
          return {
            id_proveedor: row["id_proveedor"],
            ruc: row["ruc"],
            razon_social: row["razon_social"],
            direccion: row["direccion"],
          };
        });
        return proveedores;
      }
    } catch (error) {
      console.log("obtenerProveedor/es error", error);
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
      console.log(error);
    }
  };

  saveProveedor = async (obj) => {
    try {
      await this._db("proveedores").insert(obj);
      return obj;
    } catch (err) {
      console.log(err);
      throw new Error(err);
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
        });
      return rows;
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  };

  deleteProveedor = async (id_proveedor) => {
    try {
      const rows = await this._db("proveedores")
        .where("id_proveedor", "=", id_proveedor)
        .del();
      return rows;
    } catch (error) {
      console.log("deleteProveedor/es error", error);
      throw new Error(error);
    }
  };
}

export default ProveedorSQLITE3;
