import {Router} from 'express';
import {salidaLineaController} from '../controller/salidaLineaController';
class SalidaLineaRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', salidaLineaController.list);
        this.router.get('/:id',salidaLineaController.getOne);
        this.router.get('/linea/:id',salidaLineaController.getLinea);
        this.router.post('/', salidaLineaController.create); 
        this.router.delete('/:id',salidaLineaController.delete);
        this.router.put('/:id',salidaLineaController.update);
    }
}

const salidaLineaRoutes = new SalidaLineaRoutes();
export default salidaLineaRoutes.router;