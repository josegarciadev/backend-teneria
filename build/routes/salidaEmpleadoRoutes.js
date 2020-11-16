"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const salidaEmpleadoController_1 = require("../controller/salidaEmpleadoController");
class SalidaEmpleadosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', salidaEmpleadoController_1.salidaEmpleadosController.list);
        this.router.get('/:id', salidaEmpleadoController_1.salidaEmpleadosController.getOne);
        this.router.post('/', salidaEmpleadoController_1.salidaEmpleadosController.create);
        this.router.delete('/:id', salidaEmpleadoController_1.salidaEmpleadosController.delete);
        this.router.put('/:id', salidaEmpleadoController_1.salidaEmpleadosController.update);
    }
}
const salidaEmpleadosRoutes = new SalidaEmpleadosRoutes();
exports.default = salidaEmpleadosRoutes.router;
