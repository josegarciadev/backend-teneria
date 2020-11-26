import {Router} from 'express';
import {auditoriasAlmacenController} from '../controller/auditoriasAlmacenController';
 class AuditoriasAlmacenRoutes{

    public router:Router=Router();
    constructor(){
        this.config();
    }


    config():void{
        this.router.get('/entsal/',auditoriasAlmacenController.getEntSal)
        this.router.get('/entsalup/',auditoriasAlmacenController.getEntSalUp);
        this.router.get('/usuarios/',auditoriasAlmacenController.getUser);
        this.router.get('/sesiones/',auditoriasAlmacenController.getSesiones);
    }

 }
 const auditoriasAlmacenRoutes = new AuditoriasAlmacenRoutes();

 export default auditoriasAlmacenRoutes.router;