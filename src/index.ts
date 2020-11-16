import express, {Application} from 'express';
import indexRoutes from './routes/indexRoutes';
import morgan from 'morgan';
import cors from 'cors';


//Rutas
import departamentosRoutes from './routes/departamentosRoutes';
import empleadosRoutes from './routes/empleadosRoutes';
import entradaEmpleadoRoutes from './routes/entradaEmpleadoRoutes';
import entradaLineaRoutes from './routes/entradaLineaRoutes';
import lineaRoutes from './routes/lineaRoutes';
import lineaProductoRoutes from './routes/lineaProductoRoutes';
import productosRoutes from './routes/productoRoutes';
import prodprovRoutes from './routes/prodprovRoutes';
import proveedorRoutes from './routes/proveedorRoutes';
import salidaEmpleadosRoutes from './routes/salidaEmpleadoRoutes';
import salidaLineaRoutes from './routes/salidaLineaRoutes';
import usuarioRoutes from './routes/usuarioRoutes';
import menuRoutes from './routes/menuRoutes';

class Server{
    public app : Application;
    constructor(){
        this.app= express();
        this.config();
        this.routes();
    }

    config():void{
        this.app.set('port',process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
    }

    routes():void{
        this.app.use('',indexRoutes);
        this.app.use('/api/dep',departamentosRoutes);
        this.app.use('/api/emp',empleadosRoutes);
        this.app.use('/api/entEmp',entradaEmpleadoRoutes);
        this.app.use('/api/entLinea',entradaLineaRoutes)
        this.app.use('/api/linea',lineaRoutes);
        this.app.use('/api/lineaprod',lineaProductoRoutes);
        this.app.use('/api/productos',productosRoutes);
        this.app.use('/api/prodprov', prodprovRoutes);
        this.app.use('/api/proveedor',proveedorRoutes);
        this.app.use('/api/salEmp',salidaEmpleadosRoutes);
        this.app.use('/api/salLinea',salidaLineaRoutes);
        this.app.use('/api/usuarios',usuarioRoutes);
        this.app.use('/api/menu',menuRoutes);
    }

    start():void{
        this.app.listen(this.app.get('port'),()=>{
            console.log("Servidor ON, Port: "+ this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();