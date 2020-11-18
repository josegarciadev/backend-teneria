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
exports.lineaProductoController = void 0;
const database_1 = __importDefault(require("../database"));
class LineaProductoController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield database_1.default.query('select *,linea_producto.id_prodpro,linea_producto.id_linea,prod_provee.id_producto,prod_provee.id_proveedor,prod_provee.id_producto,prod_provee.id_proveedor,linea.id_departamento from linea_producto inner join prod_provee on linea_producto.id_prodpro=prod_provee.id_prodpro inner join producto on prod_provee.id_producto=producto.id_producto inner join proveedor on prod_provee.id_proveedor=proveedor.id_proveedor inner join linea on linea_producto.id_linea=linea.id_linea inner join departamentos on linea.id_departamento=departamentos.id_departamento ORDER BY `id_lineaprod` ASC');
            res.json(query);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const query = yield database_1.default.query('select *,linea_producto.id_prodpro,linea_producto.id_linea,prod_provee.id_producto,prod_provee.id_proveedor,prod_provee.id_producto,prod_provee.id_proveedor,linea.id_departamento from linea_producto inner join prod_provee on linea_producto.id_prodpro=prod_provee.id_prodpro inner join producto on prod_provee.id_producto=producto.id_producto inner join proveedor on prod_provee.id_proveedor=proveedor.id_proveedor inner join linea on linea_producto.id_linea=linea.id_linea inner join departamentos on linea.id_departamento=departamentos.id_departamento where id_lineaprod=? ORDER BY `id_lineaprod` ASC', [id]);
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
            yield database_1.default.query('insert into linea_producto set ?', [req.body]);
            res.json({ message: 'Creado con exito' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('delete from linea_producto where id_lineaprod= ?', [id]);
            res.json({ message: 'Eliminado con exito' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('update linea_producto set ? where id_lineaprod=?', [req.body, id]);
            res.json({ message: 'Actualizado con exito' });
        });
    }
}
exports.lineaProductoController = new LineaProductoController();
