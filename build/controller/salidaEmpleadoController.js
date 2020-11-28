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
exports.salidaEmpleadosController = void 0;
const database_1 = __importDefault(require("../database"));
class SalidaEmpleadosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield database_1.default.query('select *,salida_empleado.id_empleado,empleados.id_departamento  from salida_empleado inner join empleados on salida_empleado.id_empleado= empleados.id_empleado inner join departamentos on empleados.id_departamento=departamentos.id_departamento  ORDER BY `salida_empleado`.`id_salida` ASC');
            res.json(query);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const query = yield database_1.default.query('select *,salida_empleado.id_empleado from salida_empleado inner join empleados on salida_empleado.id_empleado= empleados.id_empleado where id_salida=?  ORDER BY `salida_empleado`.`id_salida` ASC', [id]);
            if (query.length > 0) {
                return res.json(query[0]);
            }
            return res.status(404).json({
                message: 'Error al buscar el id'
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('insert into salida_empleado set ?', [req.body]);
            res.json({ message: 'Creado con exito' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datos = JSON.parse(req.params.id);
            var id = datos.id;
            delete datos.id;
            yield database_1.default.query('update salida_empleado set ? where id_salida=?', [datos, id]);
            yield database_1.default.query('delete from salida_empleado where id_salida= ?', [id]);
            res.json({ message: 'Eliminado con exito' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('update salida_empleado set ? where id_salida=?', [req.body, id]);
            res.json({ message: 'Actualizado con exito' });
        });
    }
    salida(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield database_1.default.query('select COUNT(*) as valor from salida_empleado');
            res.json(query[0]);
        });
    }
}
exports.salidaEmpleadosController = new SalidaEmpleadosController();
