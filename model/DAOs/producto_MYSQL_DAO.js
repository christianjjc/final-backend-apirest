import dbInstance from "../../connection/connMysql.js";
import ProductosBaseDAO from "./producto_Base_DAO.js";
import moment from "moment";

class ProductoMYSQL extends ProductosBaseDAO {
  constructor() {
    super();
    this._db = dbInstance.getConnection();
  }

  getIdProducto = async (anomes) => {
    try {
      const result = await this._db
        .select("id_producto")
        .from("productos")
        .where("id_producto", "like", `${anomes}%`)
        .orderBy("id_producto", "desc")
        .first();
      if (result) {
        return result;
      } else {
        return { id_producto: `${anomes}0000` };
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  getProductos = async (id) => {
    try {
      const rows = await this._db
        .select("*")
        .from("productos")
        .innerJoin("categorias_prod", "productos.id_categoria_prod", "categorias_prod.id_categoria_prod")
        .innerJoin("undmed", "productos.id_undmed", "undmed.id_undmed")
        .where("id_producto", id);
      const result = rows.map((row) => {
        return {
          id_producto: row["id_producto"],
          nombre_producto: row["nombre_producto"],
          id_categoria_prod: row["id_categoria_prod"],
          nombre_categoria_prod: row["nombre_categoria_prod"],
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

  getProductosAll = async (valor) => {
    try {
      const rows = await this._db
        .select("*")
        .from("productos")
        .innerJoin("categorias_prod", "productos.id_categoria_prod", "categorias_prod.id_categoria_prod")
        .innerJoin("undmed", "productos.id_undmed", "undmed.id_undmed")
        .where("nombre_producto", "like", `%${valor}%`)
        .orWhere("categorias_prod.nombre_categoria_prod", "like", `%${valor}%`)
        .limit(500)
        .orderBy("nombre_producto", "asc");
      const result = rows.map((row) => {
        return {
          id_producto: row["id_producto"],
          nombre_producto: row["nombre_producto"],
          id_categoria_prod: row["id_categoria_prod"],
          nombre_categoria_prod: row["nombre_categoria_prod"],
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

  saveProducto = async (obj) => {
    try {
      await this._db("productos").insert(obj);
      return obj;
    } catch (error) {
      throw new Error(error);
    }
  };

  updateProducto = async (obj) => {
    try {
      const rows = await this._db("productos")
        .where("id_producto", "=", obj.id_producto)
        .update({
          nombre_producto: obj.nombre_producto,
          id_categoria_prod: obj.id_categoria_prod,
          id_undmed: obj.id_undmed,
          updated_at: moment().format("YYYY-MM-DD HH:mm:ss"),
        });
      return rows;
    } catch (error) {
      throw new Error(error);
    }
  };

  deleteProducto = async (id) => {
    try {
      const rows = await this._db("productos").where("id_producto", "=", id).del();
      return rows;
    } catch (error) {
      throw new Error(error);
    }
  };
}

export default ProductoMYSQL;
