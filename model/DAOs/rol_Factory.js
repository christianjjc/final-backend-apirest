import RolMYSQL from "./rol_MYSQL3_DAO.js";
import RolSQLITE3 from "./rol_SQLITE3_DAO.js";

class RolFactoryDAO {
  static get(tipo) {
    switch (tipo) {
      case "SQLITE3":
        return new RolSQLITE3();
      case "MYSQL":
        return new RolMYSQL();
    }
  }
}

export default RolFactoryDAO;
