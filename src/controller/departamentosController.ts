import {Request, Response} from 'express';
import pool from '../database';

class DepartamentosController{

    public async list(req:Request, res: Response):Promise<void>{
        const query = await pool.query('select * from departamentos');
        res.json(query);
        console.log(query); 
    }

    public async getOne(req:Request, res:Response):Promise<any>{
        const {id} = req.params;
        const query = await pool.query('select * from departamentos where id_departamento=?',[id]);
        if(query.length>0){
            return res.json(query[0]);
        }
        return res.status(404).json({
            message:'Error al buscar el id'
        });
    }

    public async create (req:Request, res: Response):Promise<void>{
        await pool.query('insert into departamentos set ?',[req.body]);
        res.json({message:'Creado con exito'});
    }

    public async delete(req: Request, res: Response):Promise<void>{
        const {id} = req.params;
        await pool.query('delete from departamentos where id_departamento= ?',[id]);
        res.json({message:'Eliminado con exito'});
    }

    public async update(req:Request, res:Response):Promise<void>{
        const {id} = req.params;
        await pool.query('update departamentos set ? where id_departamento=?',[req.body,id]);
        res.json({message:'Actualizado con exito'});
    }

}
export const departamentosController = new DepartamentosController();