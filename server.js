import config from "./config.js";
import express from "express";
import cors from "cors";

const app = express();
if (config.NODE_ENV == "development") app.use(cors());

console.log(config);

app.use(express.static("public"));
app.use(express.json());

const PORT = config.PORT || "8080";
const server = app.listen(PORT, () => {
  console.log(
    `Servidor express escuchando en el puerto ${PORT} (${config.NODE_ENV} - ${config.TIPO_PERSISTENCIA})`
  );
});

server.on("error", (error) => console.log("Servidor express en error:", error));

app.get("/",(req, res)=>{

    return res.json({uno: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa!"})

})