import {Request, Response} from 'express';
import pool from '../database';

class EntradaEmpleadosController{

    public async list(req:Request, res: Response):Promise<void>{
        const query = await pool.query('select *,entrada_empleado.id_empleado,empleados.id_departamento from entrada_empleado inner join empleados on entrada_empleado.id_empleado = empleados.id_empleado inner join departamentos on empleados.id_departamento=departamentos.id_departamento  ORDER BY `entrada_empleado`.`id_entrada` ASC');
        res.json(query);
        
    }

    public async getOne(req:Request, res:Response):Promise<any>{
        const {id} = req.params;
        const query = await pool.query('select *,entrada_empleado.id_empleado from entrada_empleado inner join empleados on entrada_empleado.id_empleado = empleados.id_empleado where id_entrada=?  ORDER BY `entrada_empleado`.`id_entrada` ASC',[id]);
        if(query.length>0){
            return res.json(query[0]);
        }
        return res.status(404).json({
            message:'Error al buscar el id'
        });
    }

    public async create (req:Request, res: Response):Promise<void>{
        await pool.query('insert into entrada_empleado set ?',[req.body]);
        res.json({message:'Creado con exito'});
    }

    public async delete(req: Request, res: Response):Promise<void>{
        const {id} = req.params;
        await pool.query('delete from entrada_empleado where id_entrada= ?',[id]);
        res.json({message:'Eliminado con exito'});
    }

    public async update(req:Request, res:Response):Promise<void>{
        const {id} = req.params;
        await pool.query('update entrada_empleado set ? where id_entrada=?',[req.body,id]);
        res.json({message:'Actualizado con exito'});
    }

}
export const entradaEmpleadosController = new EntradaEmpleadosController();