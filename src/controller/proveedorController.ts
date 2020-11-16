import {Request, Response} from 'express';
import pool from '../database';

class ProveedorController{

    public async list(req:Request, res: Response):Promise<void>{
        const query = await pool.query('select * from proveedor');
        res.json(query);
        
    }

    public async getOne(req:Request, res:Response):Promise<any>{
        const {id} = req.params;
        const query = await pool.query('select * from proveedor where id_proveedor=?',[id]);
        if(query.length>0){
            return res.json(query[0]);
        }
        return res.status(404).json({
            message:'Error al buscar el id'
        });
    }

    public async create (req:Request, res: Response):Promise<void>{
        await pool.query('insert into proveedor set ?',[req.body]);
        res.json({message:'Creado con exito'});
    }

    public async delete(req: Request, res: Response):Promise<void>{
        const {id} = req.params;
        await pool.query('delete from proveedor where id_proveedor= ?',[id]);
        res.json({message:'Eliminado con exito'});
    }

    public async update(req:Request, res:Response):Promise<void>{
        const {id} = req.params;
        await pool.query('update proveedor set ? where id_proveedor=?',[req.body,id]);
        res.json({message:'Actualizado con exito'});
    }

}
export const proveedorController = new ProveedorController();