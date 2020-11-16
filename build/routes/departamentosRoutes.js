"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const departamentosController_1 = require("../controller/departamentosController");
class DepartamentosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', departamentosController_1.departamentosController.list);
        this.router.get('/:id', departamentosController_1.departamentosController.getOne);
        this.router.post('/', departamentosController_1.departamentosController.create);
        this.router.delete('/:id', departamentosController_1.departamentosController.delete);
        this.router.put('/:id', departamentosController_1.departamentosController.update);
    }
}
const departamentosRoutes = new DepartamentosRoutes();
exports.default = departamentosRoutes.router;
