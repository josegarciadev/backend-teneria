"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productoController_1 = require("../controller/productoController");
class ProductosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', productoController_1.productoController.list);
        this.router.get('/:id', productoController_1.productoController.getOne);
        this.router.post('/', productoController_1.productoController.create);
        this.router.delete('/:id', productoController_1.productoController.delete);
        this.router.put('/:id', productoController_1.productoController.update);
    }
}
const productosRoutes = new ProductosRoutes();
exports.default = productosRoutes.router;
