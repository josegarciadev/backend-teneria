import {Request, Response} from 'express';
import pool from '../database';

class SalidaLineaController{

    public async list(req:Request, res: Response):Promise<void>{
        const query = await pool.query('select *,salida_linea.id_linea,salida_linea.id_empleado,salida_linea.id_lineaprod,linea.id_departamento,linea.nombre_linea as nom_lin,departamentos.nombre_departamento as nom_dep,linea_producto.id_prodpro,prod_provee.id_producto,prod_provee.id_proveedor,producto.nombre_producto as nom_prod,producto.codigo_producto as cod_prod, producto.unidad_medida as unid_med,proveedor.nombre_proveedor as nom_prov from salida_linea inner join linea on salida_linea.id_linea=linea.id_linea inner join departamentos on linea.id_departamento=departamentos.id_departamento inner join linea_producto on salida_linea.id_lineaprod=linea_producto.id_lineaprod inner join prod_provee on linea_producto.id_prodpro=prod_provee.id_prodpro inner join producto on prod_provee.id_producto=producto.id_producto inner join proveedor on prod_provee.id_proveedor=proveedor.id_proveedor inner join empleados on salida_linea.id_empleado = empleados.id_empleado  ORDER BY `salida_linea`.`fecha` ASC');
        res.json(query); 
        
    }

    public async getOne(req:Request, res:Response):Promise<any>{
        const {id} = req.params;
        const query = await pool.query('select *,salida_linea.id_linea,salida_linea.id_lineaprod,linea.id_departamento,salida_linea.id_empleado,linea.nombre_linea as nom_lin,departamentos.nombre_departamento as nom_dep,linea_producto.id_prodpro,prod_provee.id_producto,prod_provee.id_proveedor,producto.nombre_producto as nom_prod,producto.codigo_producto as cod_prod, producto.unidad_medida as unid_med,proveedor.nombre_proveedor as nom_prov from salida_linea inner join linea on salida_linea.id_linea=linea.id_linea inner join departamentos on linea.id_departamento=departamentos.id_departamento inner join linea_producto on salida_linea.id_lineaprod=linea_producto.id_lineaprod inner join prod_provee on linea_producto.id_prodpro=prod_provee.id_prodpro inner join producto on prod_provee.id_producto=producto.id_producto inner join proveedor on prod_provee.id_proveedor=proveedor.id_proveedor inner join empleados on salida_linea.id_empleado = empleados.id_empleado where nro_orden=?',[id]);
        if(query.length>0){
            return res.json(query[0]);
        }
        return res.status(404).json({
            message:'Error al buscar el id'
        });
    }

    public async getLinea(req:Request, res:Response):Promise<any>{
        const {id} = req.params;
        const query = await pool.query('select *,linea_producto.id_prodpro,prod_provee.id_producto, prod_provee.id_proveedor  from linea_producto inner join prod_provee on linea_producto.id_prodpro = prod_provee.id_prodpro inner join producto on prod_provee.id_producto=producto.id_producto inner join proveedor on prod_provee.id_proveedor = proveedor.id_proveedor where id_linea=?',[id]);
        if(query.length>0){
            return res.json(query);
        }
        return res.status(404).json({
            message:'Error al buscar el id'
        });
    }
    
    public async create (req:Request, res: Response):Promise<any>{
       
        try{
            await pool.query('insert into salida_linea set ?',[req.body]);
            return   res.json({message:'Creado con exito'});
        }catch{
            return res.json({message:false});
        }
        
    }

    public async delete(req: Request, res: Response):Promise<void>{

        const datos = JSON.parse(req.params.id);
        var id = datos.id;
        delete datos.id;
      
        await pool.query('update salida_linea set ? where nro_orden=?',[datos,id]);
        

        await pool.query('delete from salida_linea where nro_orden= ?',[id]);
        res.json({message:'Eliminado con exito'});
    }

    public async update(req:Request, res:Response):Promise<void>{
        const {id} = req.params;
       
        await pool.query('update salida_linea set ? where nro_orden=?',[req.body,id]);
        res.json({message:'Actualizado con exito'});
    }

}
export const salidaLineaController = new SalidaLineaController();