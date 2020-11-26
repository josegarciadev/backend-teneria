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
exports.entradaLineaController = void 0;
const database_1 = __importDefault(require("../database"));
class EntradaLineaController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield database_1.default.query('select *,entrada_linea.id_linea,entrada_linea.id_empleado,entrada_linea.id_lineaprod,linea.id_departamento,linea.nombre_linea as nom_lin,departamentos.nombre_departamento as nom_dep,linea_producto.id_prodpro,prod_provee.id_producto,prod_provee.id_proveedor,producto.nombre_producto as nom_prod,producto.codigo_producto as cod_prod, producto.unidad_medida as unid_med,proveedor.nombre_proveedor as nom_prov from entrada_linea inner join linea on entrada_linea.id_linea=linea.id_linea inner join departamentos on linea.id_departamento=departamentos.id_departamento inner join linea_producto on entrada_linea.id_lineaprod=linea_producto.id_lineaprod inner join prod_provee on linea_producto.id_prodpro=prod_provee.id_prodpro inner join producto on prod_provee.id_producto=producto.id_producto inner join proveedor on prod_provee.id_proveedor=proveedor.id_proveedor inner join empleados on entrada_linea.id_empleado= empleados.id_empleado ORDER BY `entrada_linea`.`fecha` ASC');
            res.json(query);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const query = yield database_1.default.query('select *,entrada_linea.id_linea,entrada_linea.id_empleado,entrada_linea.id_lineaprod,linea.id_departamento,linea_producto.id_prodpro,prod_provee.id_producto,prod_provee.id_proveedor from entrada_linea inner join linea on entrada_linea.id_linea=linea.id_linea inner join departamentos on linea.id_departamento=departamentos.id_departamento inner join linea_producto on entrada_linea.id_lineaprod=linea_producto.id_lineaprod inner join prod_provee on linea_producto.id_prodpro=prod_provee.id_prodpro inner join producto on prod_provee.id_producto=producto.id_producto inner join proveedor on prod_provee.id_proveedor=proveedor.id_proveedor inner join empleados on entrada_linea.id_empleado= empleados.id_empleado where nro_orden=? ORDER BY `entrada_linea`.`fecha` ASC', [id]);
            if (query.length > 0) {
                return res.json(query[0]);
            }
            return res.status(404).json({
                message: 'Error al buscar el id'
            });
        });
    }
    getLinea(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const query = yield database_1.default.query('select *,linea_producto.id_prodpro,prod_provee.id_producto, prod_provee.id_proveedor  from linea_producto inner join prod_provee on linea_producto.id_prodpro = prod_provee.id_prodpro inner join producto on prod_provee.id_producto=producto.id_producto inner join proveedor on prod_provee.id_proveedor = proveedor.id_proveedor where id_linea=?', [id]);
            if (query.length > 0) {
                return res.json(query);
            }
            return res.status(404).json({
                message: 'Error al buscar el id'
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('insert into entrada_linea set ?', [req.body]);
            res.json({ message: 'Creado con exito' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datos = JSON.parse(req.params.id);
            var id = datos.id;
            delete datos.id;
            yield database_1.default.query('update entrada_linea set ? where nro_orden=?', [datos, id]);
            yield database_1.default.query('delete from entrada_linea where nro_orden= ?', [id]);
            res.json({ message: 'Eliminado con exito' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('update entrada_linea set ? where nro_orden=?', [req.body, id]);
            res.json({ message: 'Actualizado con exito' });
        });
    }
}
exports.entradaLineaController = new EntradaLineaController();
