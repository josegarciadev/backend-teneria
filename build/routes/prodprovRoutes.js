"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prodprovController_1 = require("../controller/prodprovController");
class ProdprovRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', prodprovController_1.prodprovController.list);
        this.router.get('/:id', prodprovController_1.prodprovController.getOne);
        this.router.post('/', prodprovController_1.prodprovController.create);
        this.router.delete('/:id', prodprovController_1.prodprovController.delete);
        this.router.put('/:id', prodprovController_1.prodprovController.update);
    }
}
const prodprovRoutes = new ProdprovRoutes();
exports.default = prodprovRoutes.router;
