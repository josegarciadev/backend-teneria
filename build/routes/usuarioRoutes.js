"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarioController_1 = require("../controller/usuarioController");
class UsuarioRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', usuarioController_1.usuarioController.list);
        this.router.get('/getone/:id', usuarioController_1.usuarioController.getOne);
        this.router.get('/rol/', usuarioController_1.usuarioController.getrol);
        this.router.get('/menu/:id', usuarioController_1.usuarioController.getmenu);
        this.router.post('/', usuarioController_1.usuarioController.create);
        this.router.post('/login/', usuarioController_1.usuarioController.login);
        this.router.delete('/:id', usuarioController_1.usuarioController.delete);
        this.router.put('/:id', usuarioController_1.usuarioController.update);
    }
}
const usuarioRoutes = new UsuarioRoutes();
exports.default = usuarioRoutes.router;
