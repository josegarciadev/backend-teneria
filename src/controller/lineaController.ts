import {Request, Response} from 'express';
import pool from '../database';

class LineaController{

    public async list(req:Request, res: Response):Promise<void>{
        const query = await pool.query('select  *,linea.id_departamento,departamentos.nombre_departamento as nom_dep, departamentos.descripcion_dep as des_dep from linea inner join departamentos on linea.id_departamento=departamentos.id_departamento');
        res.json(query);
        
    }

    public async getOne(req:Request, res:Response):Promise<any>{
        const {id} = req.params;
        const query = await pool.query('select  *,linea.id_departamento,departamentos.nombre_departamento as nom_dep, departamentos.descripcion_dep as des_dep from linea inner join departamentos on linea.id_departamento=departamentos.id_departamento where id_linea=?',[id]);
        if(query.length>0){
            return res.json(query[0]);
        }
        return res.status(404).json({
            message:'Error al buscar el id'
        });
    }

    public async create (req:Request, res: Response):Promise<void>{
        await pool.query('insert into linea set ?',[req.body]);
        res.json({message:'Creado con exito'});
    }

    public async delete(req: Request, res: Response):Promise<void>{
        const {id} = req.params;
        await pool.query('delete from linea where id_linea= ?',[id]);
        res.json({message:'Eliminado con exito'});
    }

    public async update(req:Request, res:Response):Promise<void>{
        const {id} = req.params;
        await pool.query('update linea set ? where id_linea=?',[req.body,id]);
        res.json({message:'Actualizado con exito'});
    }

}
export const lineaController = new LineaController();