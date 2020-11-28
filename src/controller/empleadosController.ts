import {Request, Response} from 'express';
import pool from '../database';

class EmpleadosController{

    public async list(req:Request, res: Response):Promise<void>{
        const query = await pool.query('select *,empleados.id_departamento from empleados inner join departamentos on empleados.id_departamento = departamentos.id_departamento ORDER BY `empleados`.`id_empleado` ASC');
        res.json(query);
       
    }

    public async getOne(req:Request, res:Response):Promise<any>{
        const {id} = req.params;
        const query = await pool.query('select *,empleados.id_departamento  from empleados inner join departamentos on empleados.id_departamento = departamentos.id_departamento where id_empleado=?',[id]);
        if(query.length>0){
            return res.json(query[0]);
        }
        return res.status(404).json({
            message:'Error al buscar el id'
        });
    } 

    public async create (req:Request, res: Response):Promise<void>{
       
        await pool.query('insert into empleados set ?',[req.body]);
        res.json({message:'Creado con exito'});
    }

    public async delete(req: Request, res: Response):Promise<any>{
        const datos = JSON.parse(req.params.id);
        var id = datos.id;
        delete datos.id;
     
      await pool.query('update empleados set ? where id_empleado=?',[datos,id]);
     
       await pool.query('delete from empleados where id_empleado= ?',[id]);
        return res.json({message:'Eliminado con exito'});
           
    }

    public async update(req:Request, res:Response):Promise<void>{
        const {id} = req.params;

        await pool.query('update empleados set ? where id_empleado=?',[req.body,id]);
        res.json({message:'Actualizado con exito'});
    }
    public async empleados(req:Request, res:Response):Promise<void>{
        const query = await pool.query('select COUNT(*) as valor from empleados');
        res.json(query[0]);
    }
}
export const empleadosController = new EmpleadosController();