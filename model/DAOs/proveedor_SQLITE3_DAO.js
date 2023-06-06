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
  };

  getProveedores = async (id) => {
    try {
       if (id) { 
        const rows = await this._db
          .select("*")
          .from("proveedores")
          .where("id_proveedor", id);
        const proveedor = rows.map((row) => {
          return {
            id_proveedor: row["id_proveedor"],
            ruc: row["ruc"],
            razon_social: row["razon_social"],
            direccion: row["direccion"],
          };
        });
        return [proveedor];
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
}

export default ProveedorSQLITE3;
