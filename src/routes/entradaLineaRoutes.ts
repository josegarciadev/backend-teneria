import {Router} from 'express';
import {entradaLineaController} from '../controller/entradaLineaController';
class EntradaLineaRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', entradaLineaController.list);
        this.router.get('/:id',entradaLineaController.getOne);
        this.router.get('/linea/:id',entradaLineaController.getLinea);
        this.router.post('/', entradaLineaController.create); 
        this.router.delete('/:id',entradaLineaController.delete);
        this.router.put('/:id',entradaLineaController.update);
    }
}

const entradaLineaRoutes = new EntradaLineaRoutes();
export default entradaLineaRoutes.router;