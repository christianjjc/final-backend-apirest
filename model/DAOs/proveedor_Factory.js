import ProveedorSQLITE3 from "./proveedor_SQLITE3_DAO.js";

class ProveedoresFactoryDAO {
  static get(tipo) {
    switch (tipo) {
      case "SQLITE3":
        return new ProveedorSQLITE3();
      case "OTRA BD":
        return "OTRA BD";
      default:
        return new ProveedorSQLITE3();
    }
  }
}

export default ProveedoresFactoryDAO;
