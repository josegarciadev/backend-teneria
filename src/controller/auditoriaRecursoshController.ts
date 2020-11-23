import {Request, Response } from 'express';
import pool from '../database';

class AuditoriasRecursosHController{

    public  async getEntrada(req:Request,res:Response):Promise<void>{
        
        const query= await pool.query('SELECT * FROM `auditoria_entrada_empleados` ORDER BY `auditoria_entrada_empleados`.`fecha` ASC ');

        res.json(query);
    }

    public  async getSalida(req:Request,res:Response):Promise<void>{
        
        const query= await pool.query('SELECT * FROM `auditoria_salida_empleados` ORDER BY `auditoria_salida_empleados`.`fecha` ASC ');

        res.json(query);
    }

    public  async getEmpleado(req:Request,res:Response):Promise<void>{
        
        const query= await pool.query('SELECT * FROM `auditoria_empleados` ORDER BY `auditoria_empleados`.`fecha` ASC');

        res.json(query);
    }

}
export const auditoriasRecursosHController = new AuditoriasRecursosHController();