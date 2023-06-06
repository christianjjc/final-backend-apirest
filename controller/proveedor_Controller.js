import ProveedorApi from "../api/proveedor_Api.js";

class ProveedorControlador {
    constructor() {
        this.proveedorApi = new ProveedorApi();
    };

    getProveedores = async (req, res)=>{
        try {
            let id = req.params.id;
            let proveedores = await this.proveedorApi.getProveedores(id);
            return res.send(proveedores);
        } catch (error) {
            console.log("Error obtener Proveedor - Controllador", error);
        }
    }

};

export default ProveedorControlador
