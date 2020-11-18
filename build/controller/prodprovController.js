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
exports.prodprovController = void 0;
const database_1 = __importDefault(require("../database"));
class ProdprovController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield database_1.default.query('select *,id_prodpro,prod_provee.id_producto,producto.nombre_producto as nom_prod,producto.codigo_producto as cod_prod,producto.unidad_medida as unid_med ,prod_provee.id_proveedor,proveedor.nombre_proveedor as nom_prov,proveedor.descripcion_prov as des_prov from prod_provee inner join producto on prod_provee.id_producto=producto.id_producto inner join proveedor on prod_provee.id_proveedor=proveedor.id_proveedor ORDER BY `prod_provee`.`id_prodpro` ASC');
            res.json(query);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const query = yield database_1.default.query('select *,id_prodpro,prod_provee.id_producto,producto.nombre_producto as nom_prod,producto.codigo_producto as cod_prod,producto.unidad_medida as unid_med ,prod_provee.id_proveedor,proveedor.nombre_proveedor as nom_prov,proveedor.descripcion_prov as des_prov from prod_provee inner join producto on prod_provee.id_producto=producto.id_producto inner join proveedor on prod_provee.id_proveedor=proveedor.id_proveedor where id_prodpro=? ORDER BY `prod_provee`.`id_prodpro` ASC', [id]);
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
            yield database_1.default.query('insert into prod_provee set ?', [req.body]);
            res.json({ message: 'Creado con exito' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('delete from prod_provee where id_prodpro= ?', [id]);
            res.json({ message: 'Eliminado con exito' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('update prod_provee set ? where id_prodpro=?', [req.body, id]);
            res.json({ message: 'Actualizado con exito' });
        });
    }
}
exports.prodprovController = new ProdprovController();
