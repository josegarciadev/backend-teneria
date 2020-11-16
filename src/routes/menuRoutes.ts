import {Router} from 'express';
import {menuController} from '../controller/menuController';
class MenuRoutes{
    public router: Router= Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', menuController.list);
    }
}
const menuRoutes = new MenuRoutes();

export default menuRoutes.router;