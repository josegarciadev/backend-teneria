import {Router} from 'express';
import {lineaProductoController} from '../controller/lineaProductoController';
class LineaProductoRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', lineaProductoController.list);
        this.router.get('/:id',lineaProductoController.getOne);
        this.router.post('/', lineaProductoController.create); 
        this.router.delete('/:id',lineaProductoController.delete);
        this.router.put('/:id',lineaProductoController.update);
    }
}

const lineaProductoRoutes = new LineaProductoRoutes();
export default lineaProductoRoutes.router;