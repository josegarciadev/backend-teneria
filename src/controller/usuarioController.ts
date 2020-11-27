import {Request, Response} from 'express';
import pool from '../database';
import pdf  from 'html-pdf';
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
       
        const query = await pool.query('select * from usuario where user=?',[req.body.user]);
        if(query.length>0){
            let password =query[0].pass;
            if(password == req.body.pass ){
                var data = {
                    id_usuario : query[0].id_usuario,
                    nombre: query[0].nombre+'  '+query[0].apellido,
                    accion: 'Inicio de sesión'
                }
                await pool.query('insert into usuarios_logs set ?',[data]);
                return res.json(query[0]);
            }else{
                return res.json({message:false});
            }

        }else{
            return res.json({
                message:'bad user'
            });
        }
    }

    public async logout(req:Request, res: Response):Promise<void>{
        const data = JSON.parse(req.params.id);
        
        console.log(data);
        await pool.query('insert into usuarios_logs set ?',[data]);
        res.json({message:true});
    }

    public async create (req:Request, res: Response):Promise<void>{
       
        await pool.query('insert into usuario set ?',[req.body]);
        res.json({message:'Creado con exito'});
    }

    public async delete(req: Request, res: Response):Promise<void>{
        const datos = JSON.parse(req.params.id);
        var id = datos.id;
        delete datos.id;
      
        await pool.query('update usuario set ? where id_usuario=?',[datos,id]);
       
        await pool.query('delete from usuario where id_usuario= ?',[id]);
        res.json({message:'Eliminado con exito'});
    }

    public async update(req:Request, res:Response):Promise<void>{
        
        const {id} = req.params;
       
        await pool.query('update usuario set ? where id_usuario=?',[req.body,id]);
        res.json({message:'Actualizado con exito'});
    }

    public async getrol(req:Request, res:Response):Promise<void>{
        const query = await pool.query('select * from roles');
        res.json(query);
    }
    public async getmenu(req:Request, res:Response):Promise<any>{
        const {id} = req.params;
        const query =await pool.query('SELECT id_rol,menu.id_modulo,titulo,icono,submenu FROM `menu` INNER JOIN modulo on menu.id_modulo=modulo.id_modulo WHERE id_rol =? ORDER BY `menu`.`id_modulo` ASC ',[id]);
        if(query.length>0){
            return res.json(query);
        }
        return res.status(404).json({
            message:'Error al buscar el id'
        });
        
    }

    
}
export const usuarioController = new UsuarioController(); 