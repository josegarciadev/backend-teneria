"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const entradaEmpleadoController_1 = require("../controller/entradaEmpleadoController");
class EntradaEmpleadosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', entradaEmpleadoController_1.entradaEmpleadosController.list);
        this.router.get('/getone/:id', entradaEmpleadoController_1.entradaEmpleadosController.getOne);
        this.router.get('/entradas/', entradaEmpleadoController_1.entradaEmpleadosController.entradas);
        this.router.post('/', entradaEmpleadoController_1.entradaEmpleadosController.create);
        this.router.delete('/:id', entradaEmpleadoController_1.entradaEmpleadosController.delete);
        this.router.put('/:id', entradaEmpleadoController_1.entradaEmpleadosController.update);
    }
}
const entradaEmpleadosRoutes = new EntradaEmpleadosRoutes();
exports.default = entradaEmpleadosRoutes.router;
