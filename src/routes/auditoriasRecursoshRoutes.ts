import {Router} from 'express';
import {auditoriasRecursosHController} from '../controller/auditoriaRecursoshController';
 class AuditoriasRecursoshRoutes{

    public router:Router=Router();
    constructor(){
        this.config();
    }


    config():void{
        this.router.get('/entrada/',auditoriasRecursosHController.getEntrada)
        this.router.get('/salida/',auditoriasRecursosHController.getSalida);
        this.router.get('/empleados/',auditoriasRecursosHController.getEmpleado);
    }

 }
 const auditoriasRecursoshRoutes = new AuditoriasRecursoshRoutes();

 export default auditoriasRecursoshRoutes.router;