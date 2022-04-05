import sql from 'mssql';
import config from '../config';

const db = {
    user: config.dbUser,
    password: config.dbPassword,
    server: config.dbServer,
    database: config.dbDatabase,
    options: {
        encrypt: true,
        trustServerCertificate: true
    }       
};

export async function connect() {
    try {
        const pool = await sql.connect(db);
        return pool;
    } catch (err) {
        console.log(err);
    } 
}


export {sql};