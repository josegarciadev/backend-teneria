import {Request, Response} from 'express';
import pool from '../database';

class UsuarioController{

    public async list(req:Request, res: Response):Promise<void>{
        const query = await pool.query('select * from usuario');
        res.json(query);
        
    }

    public async getOne(req:Request, res:Response):Promise<any>{
        const {id} = req.params;
        const query = await pool.query('select * from usuario where id_usuario=?',[id]);
        if(query.length>0){
            return res.json(query[0]);
        }
        return res.status(404).json({
            message:'Error al buscar el id'
        });
    }
    public async login(req:Request, res:Response):Promise<any>{
       
        console.log(req.body);
        const query = await pool.query('select * from usuario where user=?',[req.body.user]);
        if(query.length>0){
            let password =query[0].pass;
            if(password == req.body.pass ){
                return res.json(query[0]);
            }else{
                return res.json({message:'Credenciales invalidas. pass'});
            }

        }
        res.status(404).json({
            message:'usuario no encontrado'
        });
        res.status(200).json({
            message:'no funciona'
        });
    }

    public async create (req:Request, res: Response):Promise<void>{
        await pool.query('insert into usuario set ?',[req.body]);
        res.json({message:'Creado con exito'});
    }

    public async delete(req: Request, res: Response):Promise<void>{
        const {id} = req.params;
        await pool.query('delete from usuario where id_usuario= ?',[id]);
        res.json({message:'Eliminado con exito'});
    }

    public async update(req:Request, res:Response):Promise<void>{
        const {id} = req.params;
        await pool.query('update usuario set ? where id_usuario=?',[req.body,id]);
        res.json({message:'Actualizado con exito'});
    }

}
export const usuarioController = new UsuarioController(); 