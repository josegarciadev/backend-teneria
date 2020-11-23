"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auditoriaRecursoshController_1 = require("../controller/auditoriaRecursoshController");
class AuditoriasRecursoshRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/entrada/', auditoriaRecursoshController_1.auditoriasRecursosHController.getEntrada);
        this.router.get('/salida/', auditoriaRecursoshController_1.auditoriasRecursosHController.getSalida);
        this.router.get('/empleados/', auditoriaRecursoshController_1.auditoriasRecursosHController.getEmpleado);
    }
}
const auditoriasRecursoshRoutes = new AuditoriasRecursoshRoutes();
exports.default = auditoriasRecursoshRoutes.router;
