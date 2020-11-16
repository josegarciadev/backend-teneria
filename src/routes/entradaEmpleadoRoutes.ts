import {Router} from 'express';
import {entradaEmpleadosController} from '../controller/entradaEmpleadoController';
class EntradaEmpleadosRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', entradaEmpleadosController.list);
        this.router.get('/:id',entradaEmpleadosController.getOne);
        this.router.post('/', entradaEmpleadosController.create); 
        this.router.delete('/:id',entradaEmpleadosController.delete);
        this.router.put('/:id',entradaEmpleadosController.update);
    }
}

const entradaEmpleadosRoutes = new EntradaEmpleadosRoutes();
export default entradaEmpleadosRoutes.router;