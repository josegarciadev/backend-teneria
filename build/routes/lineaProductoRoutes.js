"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const lineaProductoController_1 = require("../controller/lineaProductoController");
class LineaProductoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', lineaProductoController_1.lineaProductoController.list);
        this.router.get('/:id', lineaProductoController_1.lineaProductoController.getOne);
        this.router.post('/', lineaProductoController_1.lineaProductoController.create);
        this.router.delete('/:id', lineaProductoController_1.lineaProductoController.delete);
        this.router.put('/:id', lineaProductoController_1.lineaProductoController.update);
    }
}
const lineaProductoRoutes = new LineaProductoRoutes();
exports.default = lineaProductoRoutes.router;
