import {Router} from 'express';
import {prodprovController} from '../controller/prodprovController';
class ProdprovRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', prodprovController.list);
        this.router.get('/:id',prodprovController.getOne);
        this.router.post('/', prodprovController.create); 
        this.router.delete('/:id',prodprovController.delete);
        this.router.put('/:id',prodprovController.update);
    }
}

const prodprovRoutes = new ProdprovRoutes();
export default prodprovRoutes.router;