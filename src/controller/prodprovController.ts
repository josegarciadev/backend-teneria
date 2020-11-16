import {Request, Response} from 'express';
import pool from '../database';

class ProdprovController{

    public async list(req:Request, res: Response):Promise<void>{
        const query = await pool.query('select *,id_prodpro,prod_provee.id_producto,producto.nombre_producto as nom_prod,producto.codigo_producto as cod_prod,producto.unidad_medida as unid_med ,prod_provee.id_proveedor,proveedor.nombre_proveedor as nom_prov,proveedor.descripcion_prov as des_prov from prod_provee inner join producto on prod_provee.id_producto=producto.id_producto inner join proveedor on prod_provee.id_proveedor=proveedor.id_proveedor');
        res.json(query);
        
    }

    public async getOne(req:Request, res:Response):Promise<any>{
        const {id} = req.params;
        const query = await pool.query('select *,id_prodpro,prod_provee.id_producto,producto.nombre_producto as nom_prod,producto.codigo_producto as cod_prod,producto.unidad_medida as unid_med ,prod_provee.id_proveedor,proveedor.nombre_proveedor as nom_prov,proveedor.descripcion_prov as des_prov from prod_provee inner join producto on prod_provee.id_producto=producto.id_producto inner join proveedor on prod_provee.id_proveedor=proveedor.id_proveedor where id_prodpro=?',[id]);
        if(query.length>0){
            return res.json(query[0]);
        }
        return res.status(404).json({
            message:'Error al buscar el id'
        });
    }

    public async create (req:Request, res: Response):Promise<void>{
        await pool.query('insert into prod_provee set ?',[req.body]);
        res.json({message:'Creado con exito'});
    }

    public async delete(req: Request, res: Response):Promise<void>{
        const {id} = req.params;
        await pool.query('delete from prod_provee where id_prodpro= ?',[id]);
        res.json({message:'Eliminado con exito'});
    }

    public async update(req:Request, res:Response):Promise<void>{
        const {id} = req.params;
        await pool.query('update prod_provee set ? where id_prodpro=?',[req.body,id]);
        res.json({message:'Actualizado con exito'});
    }

}
export const prodprovController = new ProdprovController();