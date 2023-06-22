import LoginMYSQL from "./login_MYSQL_DAO.js";
import LoginSQLITE3 from "./login_SQLITE3_DAO.js";

class LoginFactoryDAO {
  static get(tipo) {
    switch (tipo) {
      case "SQLITE3":
        return new LoginSQLITE3();
      case "MYSQL":
        return new LoginMYSQL();
    }
  }
}

export default LoginFactoryDAO;
