import config from "./config.js";
import express from "express";
import cors from "cors";
import ProveedorRouter from "./routes/proveedor_Router.js";
import RolRouter from "./routes/rol_Router.js";
import UsuarioRouter from "./routes/usuario_Router.js";
import LoginRouter from "./routes/login_Router.js";
import UndmedRouter from "./routes/undmed_Router.js";
import CatprodRouter from "./routes/catprod_Router.js";
import ProductoRouter from "./routes/producto_Router.js";

const app = express();
if (config.NODE_ENV == "development") app.use(cors());
console.log("config env -->", config);

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
const routerUndmed = new UndmedRouter();
app.use("/undmed", routerUndmed.start());
const routerCatprod = new CatprodRouter();
app.use("/catprod", routerCatprod.start());
const routerProducto = new ProductoRouter();
app.use("/productos", routerProducto.start());
/** ------------ */

const PORT = config.PORT_SERVER;
const server = app.listen(PORT, () => {
  console.log(`Servidor express escuchando en el puerto ${PORT} (${config.NODE_ENV} - ${config.TIPO_PERSISTENCIA})`);
});
server.on("error", (error) => console.log("Servidor express en error:", error));
