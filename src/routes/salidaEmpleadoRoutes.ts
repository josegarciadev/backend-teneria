import {Router} from 'express';
import {salidaEmpleadosController} from '../controller/salidaEmpleadoController';
class SalidaEmpleadosRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', salidaEmpleadosController.list);
        this.router.get('/getone/:id',salidaEmpleadosController.getOne);
        this.router.get('/salidas',salidaEmpleadosController.salida);
        this.router.post('/', salidaEmpleadosController.create); 
        this.router.delete('/:id',salidaEmpleadosController.delete);
        this.router.put('/:id',salidaEmpleadosController.update);
    }
}

const salidaEmpleadosRoutes = new SalidaEmpleadosRoutes();
export default salidaEmpleadosRoutes.router;