import LoginSQLITE3 from "./login_SQLITE3_DAO.js";

class LoginFactoryDAO {
  static get(tipo) {
    switch (tipo) {
      case "SQLITE3":
        return new LoginSQLITE3();
      case "OTRA BD":
        return "OTRA BD";
      default:
        return new LoginSQLITE3();
    }
  }
}

export default LoginFactoryDAO;