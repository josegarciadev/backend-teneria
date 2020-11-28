"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const empleadosController_1 = require("../controller/empleadosController");
class EmpleadosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', empleadosController_1.empleadosController.list);
        this.router.get('/getone/:id', empleadosController_1.empleadosController.getOne);
        this.router.get('/empleado', empleadosController_1.empleadosController.empleados);
        this.router.post('/', empleadosController_1.empleadosController.create);
        this.router.delete('/:id', empleadosController_1.empleadosController.delete);
        this.router.put('/:id', empleadosController_1.empleadosController.update);
    }
}
const empleadosRoutes = new EmpleadosRoutes();
exports.default = empleadosRoutes.router;
