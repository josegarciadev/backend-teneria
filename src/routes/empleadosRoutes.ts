import {Router} from 'express';
import {empleadosController} from '../controller/empleadosController';
class EmpleadosRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', empleadosController.list);
        this.router.get('/:id',empleadosController.getOne);
        this.router.post('/', empleadosController.create); 
        this.router.delete('/:id',empleadosController.delete);
        this.router.put('/:id',empleadosController.update);
    }
}

const empleadosRoutes = new EmpleadosRoutes();
export default empleadosRoutes.router;