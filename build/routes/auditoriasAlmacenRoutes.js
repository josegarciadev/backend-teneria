"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auditoriasAlmacenController_1 = require("../controller/auditoriasAlmacenController");
class AuditoriasAlmacenRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/entsal/', auditoriasAlmacenController_1.auditoriasAlmacenController.getEntSal);
        this.router.get('/entsalup/', auditoriasAlmacenController_1.auditoriasAlmacenController.getEntSalUp);
        this.router.get('/usuarios/', auditoriasAlmacenController_1.auditoriasAlmacenController.getUser);
        this.router.get('/sesiones/', auditoriasAlmacenController_1.auditoriasAlmacenController.getSesiones);
    }
}
const auditoriasAlmacenRoutes = new AuditoriasAlmacenRoutes();
exports.default = auditoriasAlmacenRoutes.router;
