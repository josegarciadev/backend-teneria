import {Request, Response} from 'express';
import pool from '../database';

class ProductoController{

    public async list(req:Request, res: Response):Promise<void>{
        const query = await pool.query('select * from producto');
        res.json(query);
        
    }

    public async getOne(req:Request, res:Response):Promise<any>{
        const {id} = req.params;
        const query = await pool.query('select * from producto where id_producto=?',[id]);
        if(query.length>0){
            return res.json(query[0]);
        }
        return res.status(404).json({
            message:'Error al buscar el id'
        });
    }

    public async create (req:Request, res: Response):Promise<void>{
        await pool.query('insert into producto set ?',[req.body]);
        res.json({message:'Creado con exito'});
    }

    public async delete(req: Request, res: Response):Promise<void>{
        const {id} = req.params;
        await pool.query('delete from producto where id_producto= ?',[id]);
        res.json({message:'Eliminado con exito'});
    }

    public async update(req:Request, res:Response):Promise<void>{
        const {id} = req.params;
        await pool.query('update producto set ? where id_producto=?',[req.body,id]);
        res.json({message:'Actualizado con exito'});
    }
    public async producto(req:Request, res:Response):Promise<void>{
        const query = await pool.query('select COUNT(*) as valor from producto');
        res.json(query[0]);
    }

}
export const productoController = new ProductoController();