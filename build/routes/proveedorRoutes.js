"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const proveedorController_1 = require("../controller/proveedorController");
class ProveedorRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', proveedorController_1.proveedorController.list);
        this.router.get('/getone/:id', proveedorController_1.proveedorController.getOne);
        this.router.get('/proveedor', proveedorController_1.proveedorController.proveedor);
        this.router.post('/', proveedorController_1.proveedorController.create);
        this.router.delete('/:id', proveedorController_1.proveedorController.delete);
        this.router.put('/:id', proveedorController_1.proveedorController.update);
    }
}
const proveedorRoutes = new ProveedorRoutes();
exports.default = proveedorRoutes.router;
