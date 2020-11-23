"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
//Rutas
const departamentosRoutes_1 = __importDefault(require("./routes/departamentosRoutes"));
const empleadosRoutes_1 = __importDefault(require("./routes/empleadosRoutes"));
const entradaEmpleadoRoutes_1 = __importDefault(require("./routes/entradaEmpleadoRoutes"));
const entradaLineaRoutes_1 = __importDefault(require("./routes/entradaLineaRoutes"));
const lineaRoutes_1 = __importDefault(require("./routes/lineaRoutes"));
const lineaProductoRoutes_1 = __importDefault(require("./routes/lineaProductoRoutes"));
const productoRoutes_1 = __importDefault(require("./routes/productoRoutes"));
const prodprovRoutes_1 = __importDefault(require("./routes/prodprovRoutes"));
const proveedorRoutes_1 = __importDefault(require("./routes/proveedorRoutes"));
const salidaEmpleadoRoutes_1 = __importDefault(require("./routes/salidaEmpleadoRoutes"));
const salidaLineaRoutes_1 = __importDefault(require("./routes/salidaLineaRoutes"));
const usuarioRoutes_1 = __importDefault(require("./routes/usuarioRoutes"));
const menuRoutes_1 = __importDefault(require("./routes/menuRoutes"));
const auditoriasAlmacenRoutes_1 = __importDefault(require("./routes/auditoriasAlmacenRoutes"));
const auditoriasRecursoshRoutes_1 = __importDefault(require("./routes/auditoriasRecursoshRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('', indexRoutes_1.default);
        this.app.use('/api/dep', departamentosRoutes_1.default);
        this.app.use('/api/emp', empleadosRoutes_1.default);
        this.app.use('/api/entEmp', entradaEmpleadoRoutes_1.default);
        this.app.use('/api/entLinea', entradaLineaRoutes_1.default);
        this.app.use('/api/linea', lineaRoutes_1.default);
        this.app.use('/api/lineaprod', lineaProductoRoutes_1.default);
        this.app.use('/api/productos', productoRoutes_1.default);
        this.app.use('/api/prodprov', prodprovRoutes_1.default);
        this.app.use('/api/proveedor', proveedorRoutes_1.default);
        this.app.use('/api/salEmp', salidaEmpleadoRoutes_1.default);
        this.app.use('/api/salLinea', salidaLineaRoutes_1.default);
        this.app.use('/api/usuarios', usuarioRoutes_1.default);
        this.app.use('/api/menu', menuRoutes_1.default);
        this.app.use('/api/audital', auditoriasAlmacenRoutes_1.default);
        this.app.use('/api/auditre', auditoriasRecursoshRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log("Servidor ON, Port: " + this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
