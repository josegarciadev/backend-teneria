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
       
        console.log(req.body);
        const query = await pool.query('select * from usuario where user=?',[req.body.user]);
        if(query.length>0){
            let password =query[0].pass;
            if(password == req.body.pass ){
                return res.json(query[0]);
            }else{
                return res.json({message:false});
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
        const id_user=req.body.id_user;
        const nombre = req.body.nombre_user;
        
        delete req.body.id_user;
        delete req.body.nombre_user;
        await pool.query('set @id_usuario=?',[id_user]);
        await pool.query('set @nombre=?',[nombre]);
        await pool.query('insert into usuario set ?',[req.body]);
        res.json({message:'Creado con exito'});
    }

    public async delete(req: Request, res: Response):Promise<void>{
        const datos = JSON.parse(req.params.id);
        const id_user =datos.id_user;
        const nombre_user = datos.nombre_user;
        const id = datos.id;
      
        await pool.query('set @id_usuario=?',[id_user]);
        await pool.query('set @nombre=?',[nombre_user]);
        await pool.query('delete from usuario where id_usuario= ?',[id]);
        res.json({message:'Eliminado con exito'});
    }

    public async update(req:Request, res:Response):Promise<void>{
        
        const {id} = req.params;
        var id_user = req.body.id_user;
        var nombre_user =req.body.nombre_user
        console.log(id_user);
         
    
        await pool.query('select @id_usuario := ?, @nombre:=?',[id_user,nombre_user]);
        //await pool.query('select @nombre := ?',[nombre_user]);
        
        delete req.body.id_user;
        delete req.body.nombre_user;
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