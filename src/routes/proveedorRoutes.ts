import {Router} from 'express';
import {proveedorController} from '../controller/proveedorController';
class ProveedorRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', proveedorController.list);
        this.router.get('/:id',proveedorController.getOne);
        this.router.post('/', proveedorController.create); 
        this.router.delete('/:id',proveedorController.delete);
        this.router.put('/:id',proveedorController.update);
    }
}

const proveedorRoutes = new ProveedorRoutes();
export default proveedorRoutes.router;