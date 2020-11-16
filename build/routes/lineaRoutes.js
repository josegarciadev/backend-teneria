"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const lineaController_1 = require("../controller/lineaController");
class LineaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', lineaController_1.lineaController.list);
        this.router.get('/:id', lineaController_1.lineaController.getOne);
        this.router.post('/', lineaController_1.lineaController.create);
        this.router.delete('/:id', lineaController_1.lineaController.delete);
        this.router.put('/:id', lineaController_1.lineaController.update);
    }
}
const lineaRoutes = new LineaRoutes();
exports.default = lineaRoutes.router;
