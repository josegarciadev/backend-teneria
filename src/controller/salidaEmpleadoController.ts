import {Request, Response} from 'express';
import pool from '../database';

class SalidaEmpleadosController{

    public async list(req:Request, res: Response):Promise<void>{
        const query = await pool.query('select *,salida_empleado.id_empleado,empleados.id_departamento  from salida_empleado inner join empleados on salida_empleado.id_empleado= empleados.id_empleado inner join departamentos on empleados.id_departamento=departamentos.id_departamento  ORDER BY `salida_empleado`.`id_salida` ASC');
        res.json(query);
        
    }

    public async getOne(req:Request, res:Response):Promise<any>{
        const {id} = req.params;
        const query = await pool.query('select *,salida_empleado.id_empleado from salida_empleado inner join empleados on salida_empleado.id_empleado= empleados.id_empleado where id_salida=?  ORDER BY `salida_empleado`.`id_salida` ASC',[id]);
        if(query.length>0){
            return res.json(query[0]);
        }
        return res.status(404).json({
            message:'Error al buscar el id'
        });
    }

    public async create (req:Request, res: Response):Promise<void>{
        const id_user=req.body.id_user;
        const nombre = req.body.nombre_user;
        
        delete req.body.id_user;
        delete req.body.nombre_user;
        await pool.query('set @id_usuario=?',[id_user]);
        await pool.query('set @nombre=?',[nombre]);
        
        await pool.query('insert into salida_empleado set ?',[req.body]);
        res.json({message:'Creado con exito'});
    }

    public async delete(req: Request, res: Response):Promise<void>{
        
        const datos = JSON.parse(req.params.id);
        const id_user =datos.id_user;
        const nombre_user = datos.nombre_user;
        var id = datos.id;
        console.log(datos);
        await pool.query('set @id_usuario=?',[id_user]);
        await pool.query('set @nombre=?',[nombre_user]);
        await pool.query('delete from salida_empleado where id_salida= ?',[id]);
        res.json({message:'Eliminado con exito'});
    }

    public async update(req:Request, res:Response):Promise<void>{
        const {id} = req.params;
        
        var id_user = req.body.id_user;
        var nombre_user =req.body.nombre_user
        console.log(req.body);
         
        delete req.body.id_user;
        delete req.body.nombre_user;
        await pool.query('select @id_usuario := ?, @nombre:=?',[id_user,nombre_user]);
        //await pool.query('select @nombre := ?',[nombre_user]);
        await pool.query('update salida_empleado set ? where id_salida=?',[req.body,id]);
        res.json({message:'Actualizado con exito'});
    }

}
export const salidaEmpleadosController = new SalidaEmpleadosController();