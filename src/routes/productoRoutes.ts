import {Router} from 'express';
import {productoController} from '../controller/productoController';
class ProductosRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', productoController.list);
        this.router.get('/:id',productoController.getOne);
        this.router.post('/', productoController.create); 
        this.router.delete('/:id',productoController.delete);
        this.router.put('/:id',productoController.update);
    }
}

const productosRoutes = new ProductosRoutes();
export default productosRoutes.router;