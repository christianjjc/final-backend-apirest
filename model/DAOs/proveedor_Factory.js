import ProveedorMYSQL from "./proveedor_MYSQL_DAO.js";
import ProveedorSQLITE3 from "./proveedor_SQLITE3_DAO.js";

class ProveedoresFactoryDAO {
  static get(tipo) {
    switch (tipo) {
      case "SQLITE3":
        return new ProveedorSQLITE3();
      case "MYSQL":
        return new ProveedorMYSQL();
    }
  }
}

export default ProveedoresFactoryDAO;
