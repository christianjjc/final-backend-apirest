import dbInstance from "../../connection/connMysql.js";
import ProveedoresBaseDAO from "./proveedor_Base_DAO.js";
import moment from "moment";

class ProveedorMYSQL extends ProveedoresBaseDAO {
  constructor() {
    super();
    this._db = dbInstance.getConnection();
  }

  getIdProveedor = async (anomes) => {
    try {
      const result = await this._db
        .select("id_proveedor")
        .from("proveedores")
        .where("id_proveedor", "like", `${anomes}%`)
        .orderBy("id_proveedor", "desc")
        .first();
      if (result) {
        return result;
      } else {
        return { id_rol: `${anomes}0000` };
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  getProveedores = async (id) => {
    try {
      const rows = await this._db.select("*").from("proveedores").where("id_proveedor", id);
      const result = rows.map((row) => {
        return {
          id_proveedor: row["id_proveedor"],
          ruc: row["ruc"],
          razon_social: row["razon_social"],
          direccion: row["direccion"],
          telefono: row["telefono"],
          que_vende: row["que_vende"],
        };
      });
      return result;
    } catch (error) {
      throw new Error(error);
    }
  };

  getProveedoresAll = async (valor) => {
    try {
      const rows = await this._db
        .select("*")
        .from("proveedores")
        .where("razon_social", "like", `%${valor}%`)
        .orWhere("ruc", "like", `%${valor}%`)
        .orWhere("que_vende", "like", `%${valor}%`)
        .limit(100)
        .orderBy("razon_social", "asc");
      const result = rows.map((row) => {
        return {
          id_proveedor: row["id_proveedor"],
          ruc: row["ruc"],
          razon_social: row["razon_social"],
          direccion: row["direccion"],
          telefono: row["telefono"],
          que_vende: row["que_vende"],
        };
      });
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

  deleteProveedor = async (id) => {
    try {
      const rows = await this._db("proveedores").where("id_proveedor", "=", id).del();
      return rows;
    } catch (error) {
      throw new Error(error);
    }
  };
}
export default ProveedorMYSQL;
