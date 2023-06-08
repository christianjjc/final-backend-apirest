import express from "express";
const router = express.Router();
import LoginControlador from "../controller/login_Controller.js";

class LoginRouter {
  constructor() {
    this.loginControlador = new LoginControlador();
  }

  start() {
    router.get("/", this.loginControlador.getUsuarios);
    return router;
  }
}

export default LoginRouter;
