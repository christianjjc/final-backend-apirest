import config from "./config.js";
import express from "express";

const app = express();

console.log(config);

app.use(express.static("public"));
app.use(express.json());

const PORT = config.PORT || "8080";
const server = app.listen(PORT, () => {
  console.log(
    `Servidor express escuchando en el puerto ${PORT} (${config.NODE_ENV} - ${config.TIPO_PERSISTENCIA})`
  );
});

app.get('/',(req, res) =>{
    return res.status(200).json({respuesta: 'Servidro OK'});
})
