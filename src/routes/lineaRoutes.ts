import {Router} from 'express';
import {lineaController} from '../controller/lineaController';
class LineaRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', lineaController.list);
        this.router.get('/:id',lineaController.getOne);
        this.router.post('/', lineaController.create); 
        this.router.delete('/:id',lineaController.delete);
        this.router.put('/:id',lineaController.update);
    }
}

const lineaRoutes = new LineaRoutes();
export default lineaRoutes.router;