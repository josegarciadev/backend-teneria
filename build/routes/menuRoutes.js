"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const menuController_1 = require("../controller/menuController");
class MenuRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', menuController_1.menuController.list);
    }
}
const menuRoutes = new MenuRoutes();
exports.default = menuRoutes.router;
