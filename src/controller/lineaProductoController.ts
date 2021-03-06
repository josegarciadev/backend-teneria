import {Request, Response} from 'express';
import pool from '../database';

class LineaProductoController{

    public async list(req:Request, res: Response):Promise<void>{
        const query = await pool.query('select *,linea_producto.id_prodpro,linea_producto.id_linea,prod_provee.id_producto,prod_provee.id_proveedor,prod_provee.id_producto,prod_provee.id_proveedor,linea.id_departamento from linea_producto inner join prod_provee on linea_producto.id_prodpro=prod_provee.id_prodpro inner join producto on prod_provee.id_producto=producto.id_producto inner join proveedor on prod_provee.id_proveedor=proveedor.id_proveedor inner join linea on linea_producto.id_linea=linea.id_linea inner join departamentos on linea.id_departamento=departamentos.id_departamento ORDER BY `id_lineaprod` ASC');
        res.json(query);
        
    }

    public async getOne(req:Request, res:Response):Promise<any>{
        const {id} = req.params;
        const query = await pool.query('select *,linea_producto.id_prodpro,linea_producto.id_linea,prod_provee.id_producto,prod_provee.id_proveedor,prod_provee.id_producto,prod_provee.id_proveedor,linea.id_departamento from linea_producto inner join prod_provee on linea_producto.id_prodpro=prod_provee.id_prodpro inner join producto on prod_provee.id_producto=producto.id_producto inner join proveedor on prod_provee.id_proveedor=proveedor.id_proveedor inner join linea on linea_producto.id_linea=linea.id_linea inner join departamentos on linea.id_departamento=departamentos.id_departamento where id_lineaprod=? ORDER BY `id_lineaprod` ASC',[id]);
        if(query.length>0){
            return res.json(query[0]);
        }
        return res.status(404).json({
            message:'Error al buscar el id'
        });
    }

    public async create (req:Request, res: Response):Promise<void>{
        await pool.query('insert into linea_producto set ?',[req.body]);
        res.json({message:'Creado con exito'});
    }

    public async delete(req: Request, res: Response):Promise<void>{
        const {id} = req.params;
        await pool.query('delete from linea_producto where id_lineaprod= ?',[id]);
        res.json({message:'Eliminado con exito'});
    }

    public async update(req:Request, res:Response):Promise<void>{
        const {id} = req.params;
        await pool.query('update linea_producto set ? where id_lineaprod=?',[req.body,id]);
        res.json({message:'Actualizado con exito'});
    }

}
export const lineaProductoController = new LineaProductoController();