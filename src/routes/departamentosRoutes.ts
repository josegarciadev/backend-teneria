import {Router} from 'express';
import {departamentosController} from '../controller/departamentosController';
class DepartamentosRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', departamentosController.list);
        this.router.get('/:id',departamentosController.getOne);
        this.router.post('/', departamentosController.create); 
        this.router.delete('/:id',departamentosController.delete);
        this.router.put('/:id',departamentosController.update);
    }
}

const departamentosRoutes = new DepartamentosRoutes();
export default departamentosRoutes.router;