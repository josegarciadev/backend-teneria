import {Request, Response} from 'express';
import pool from '../database';
class MenuController{

    public async list(req:Request, res:Response):Promise<void>{
        const query = await pool.query('select * from modulo');
        res.json(query);
    }
}
export const menuController = new MenuController();