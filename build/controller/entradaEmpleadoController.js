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
exports.entradaEmpleadosController = void 0;
const database_1 = __importDefault(require("../database"));
class EntradaEmpleadosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield database_1.default.query('select *,entrada_empleado.id_empleado,empleados.id_departamento from entrada_empleado inner join empleados on entrada_empleado.id_empleado = empleados.id_empleado inner join departamentos on empleados.id_departamento=departamentos.id_departamento  ORDER BY `entrada_empleado`.`id_entrada` ASC');
            res.json(query);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const query = yield database_1.default.query('select *,entrada_empleado.id_empleado from entrada_empleado inner join empleados on entrada_empleado.id_empleado = empleados.id_empleado where id_entrada=?  ORDER BY `entrada_empleado`.`id_entrada` ASC', [id]);
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
            const id_user = req.body.id_user;
            const nombre = req.body.nombre_user;
            delete req.body.id_user;
            delete req.body.nombre_user;
            yield database_1.default.query('set @id_usuario=?', [id_user]);
            yield database_1.default.query('set @nombre=?', [nombre]);
            yield database_1.default.query('insert into entrada_empleado set ?', [req.body]);
            res.json({ message: 'Creado con exito' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datos = JSON.parse(req.params.id);
            const id_user = datos.id_user;
            const nombre_user = datos.nombre_user;
            var id = datos.id;
            console.log(datos);
            yield database_1.default.query('set @id_usuario=?', [id_user]);
            yield database_1.default.query('set @nombre=?', [nombre_user]);
            yield database_1.default.query('delete from entrada_empleado where id_entrada= ?', [id]);
            res.json({ message: 'Eliminado con exito' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            var id_user = req.body.id_user;
            var nombre_user = req.body.nombre_user;
            console.log(req.body);
            delete req.body.id_user;
            delete req.body.nombre_user;
            yield database_1.default.query('select @id_usuario := ?, @nombre:=?', [id_user, nombre_user]);
            //await pool.query('select @nombre := ?',[nombre_user]);
            yield database_1.default.query('update entrada_empleado set ? where id_entrada=?', [req.body, id]);
            res.json({ message: 'Actualizado con exito' });
        });
    }
}
exports.entradaEmpleadosController = new EntradaEmpleadosController();
