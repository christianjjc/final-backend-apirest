import ProductoMYSQL from "./producto_MYSQL_DAO.js";

class ProductosFactoryDAO {
  static get(tipo) {
    switch (tipo) {
      case "SQLITE3":
      case "MYSQL":
        return new ProductoMYSQL();
    }
  }
}

export default ProductosFactoryDAO;
