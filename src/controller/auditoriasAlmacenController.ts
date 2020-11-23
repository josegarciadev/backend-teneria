import {Request, Response } from 'express';
import pool from '../database';

class AuditoriasAlmacenController{

    public  async getEntSal(req:Request,res:Response):Promise<void>{
        
        const query= await pool.query('select * from auditoria_entrada_salidas_lineas ORDER BY `auditoria_entrada_salidas_lineas`.`fecha` ASC');

        res.json(query);
    }

    public  async getEntSalUp(req:Request,res:Response):Promise<void>{
        
        const query= await pool.query('select * from auditoria_entsa_linea_update ORDER BY `auditoria_entsa_linea_update`.`fecha` ASC');

        res.json(query);
    }

    public  async getUser(req:Request,res:Response):Promise<void>{
        
        const query= await pool.query('select * from auditoria_usuarios ORDER BY `auditoria_usuarios`.`fecha` ASC');

        res.json(query);
    }

}
export const auditoriasAlmacenController = new AuditoriasAlmacenController();