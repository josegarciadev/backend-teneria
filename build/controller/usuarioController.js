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
exports.usuarioController = void 0;
const database_1 = __importDefault(require("../database"));
class UsuarioController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield database_1.default.query('select * from usuario');
            res.json(query);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const query = yield database_1.default.query('select * from usuario where id_usuario=?', [id]);
            if (query.length > 0) {
                return res.json(query[0]);
            }
            return res.status(404).json({
                message: 'Error al buscar el id'
            });
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const query = yield database_1.default.query('select * from usuario where user=?', [req.body.user]);
            if (query.length > 0) {
                let password = query[0].pass;
                if (password == req.body.pass) {
                    return res.json(query[0]);
                }
                else {
                    return res.json({ message: false });
                }
            }
            res.status(404).json({
                message: 'usuario no encontrado'
            });
            res.status(200).json({
                message: 'no funciona'
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
            yield database_1.default.query('insert into usuario set ?', [req.body]);
            res.json({ message: 'Creado con exito' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datos = JSON.parse(req.params.id);
            const id_user = datos.id_user;
            const nombre_user = datos.nombre_user;
            const id = datos.id;
            yield database_1.default.query('set @id_usuario=?', [id_user]);
            yield database_1.default.query('set @nombre=?', [nombre_user]);
            yield database_1.default.query('delete from usuario where id_usuario= ?', [id]);
            res.json({ message: 'Eliminado con exito' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            var id_user = req.body.id_user;
            var nombre_user = req.body.nombre_user;
            console.log(id_user);
            yield database_1.default.query('select @id_usuario := ?, @nombre:=?', [id_user, nombre_user]);
            //await pool.query('select @nombre := ?',[nombre_user]);
            delete req.body.id_user;
            delete req.body.nombre_user;
            yield database_1.default.query('update usuario set ? where id_usuario=?', [req.body, id]);
            res.json({ message: 'Actualizado con exito' });
        });
    }
    getrol(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield database_1.default.query('select * from roles');
            res.json(query);
        });
    }
    getmenu(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const query = yield database_1.default.query('SELECT id_rol,menu.id_modulo,titulo,icono,submenu FROM `menu` INNER JOIN modulo on menu.id_modulo=modulo.id_modulo WHERE id_rol =? ORDER BY `menu`.`id_modulo` ASC ', [id]);
            if (query.length > 0) {
                return res.json(query);
            }
            return res.status(404).json({
                message: 'Error al buscar el id'
            });
        });
    }
}
exports.usuarioController = new UsuarioController();
