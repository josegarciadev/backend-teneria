"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auditoriasAlmacenController = void 0;
const database_1 = __importDefault(require("../database"));
class AuditoriasAlmacenController {
    getEntSal(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield database_1.default.query('select * from auditoria_entrada_salidas_lineas ORDER BY `auditoria_entrada_salidas_lineas`.`fecha` ASC');
            res.json(query);
        });
    }
    getEntSalUp(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield database_1.default.query('select * from auditoria_entsa_linea_update ORDER BY `auditoria_entsa_linea_update`.`fecha` ASC');
            res.json(query);
        });
    }
    getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield database_1.default.query('select * from auditoria_usuarios ORDER BY `auditoria_usuarios`.`fecha` ASC');
            res.json(query);
        });
    }
    getSesiones(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield database_1.default.query('SELECT * FROM `usuarios_logs` ORDER BY `usuarios_logs`.`fecha` ASC ');
            res.json(query);
        });
    }
}
exports.auditoriasAlmacenController = new AuditoriasAlmacenController();
