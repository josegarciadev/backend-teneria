"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const salidaLineaController_1 = require("../controller/salidaLineaController");
class SalidaLineaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', salidaLineaController_1.salidaLineaController.list);
        this.router.get('/:id', salidaLineaController_1.salidaLineaController.getOne);
        this.router.get('/linea/:id', salidaLineaController_1.salidaLineaController.getLinea);
        this.router.post('/', salidaLineaController_1.salidaLineaController.create);
        this.router.delete('/:id', salidaLineaController_1.salidaLineaController.delete);
        this.router.put('/:id', salidaLineaController_1.salidaLineaController.update);
    }
}
const salidaLineaRoutes = new SalidaLineaRoutes();
exports.default = salidaLineaRoutes.router;
