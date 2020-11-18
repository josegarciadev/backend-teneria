"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const entradaLineaController_1 = require("../controller/entradaLineaController");
class EntradaLineaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', entradaLineaController_1.entradaLineaController.list);
        this.router.get('/:id', entradaLineaController_1.entradaLineaController.getOne);
        this.router.get('/linea/:id', entradaLineaController_1.entradaLineaController.getLinea);
        this.router.post('/', entradaLineaController_1.entradaLineaController.create);
        this.router.delete('/:id', entradaLineaController_1.entradaLineaController.delete);
        this.router.put('/:id', entradaLineaController_1.entradaLineaController.update);
    }
}
const entradaLineaRoutes = new EntradaLineaRoutes();
exports.default = entradaLineaRoutes.router;
