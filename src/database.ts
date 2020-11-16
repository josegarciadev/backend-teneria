import mysql from 'promise-mysql';
import config from './config';
const pool = mysql.createPool(config.database);

pool.getConnection()
    .then(connection=>{
        pool.releaseConnection(connection);
        console.log('DB CONNECT');
    });

export default pool;