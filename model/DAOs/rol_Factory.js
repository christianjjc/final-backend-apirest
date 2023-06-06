import RolSQLITE3 from "./rol_SQLITE3_DAO.js";

class RolFactoryDAO {
  static get(tipo) {
    switch (tipo) {
      case "SQLITE3":
        return new RolSQLITE3();
      case "OTRA BD":
        return "OTRA BD";
      default:
        return new RolSQLITE3();
    }
  }
}

export default RolFactoryDAO;