import config from "./config.js";
import express from "express";
import cors from "cors";
import ProveedorRouter from "./routes/proveedor_Router.js";
import RolRouter from "./routes/rol_Router.js";
import UsuarioRouter from "./routes/usuario_Router.js";
import LoginRouter from "./routes/login_Router.js";

const app = express();
if (config.NODE_ENV == "development") app.use(cors());
console.log(config);

/** Midlewares */
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/** ------------ */
const routerLogin = new LoginRouter();
app.use("/", routerLogin.start());
const routerProveedor = new ProveedorRouter();
app.use("/proveedores", routerProveedor.start());
const routerRol = new RolRouter();
app.use("/roles", routerRol.start());
const routerUsuario = new UsuarioRouter();
app.use("/usuarios", routerUsuario.start());
/** ------------ */

const PORT = config.PORT || "8080";
const server = app.listen(PORT, () => {
  console.log(
    `Servidor express escuchando en el puerto ${PORT} (${config.NODE_ENV} - ${config.TIPO_PERSISTENCIA})`
  );
});
server.on("error", (error) => console.log("Servidor express en error:", error));
