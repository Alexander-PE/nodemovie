import {connect, sql} from '../database/connection.js';
import querys from '../database/querys.js';

export const getPelis = async (req, res) => {
    const pool = await connect()
    const result = await pool.request().query(querys.getAll);
    console.log(result);
    res.json(result.recordset);
}

export const createPelis = async (req, res) => {
    const {Titulo, Director, Comentario, Actores, Year, Trailer} = req.body;

    if(Titulo==null || Comentario==null || Director==null || Actores==null || Year==null || Trailer==null){
        return res.status(400).json({msg: "Complete los campos"});
    }

    const pool = await connect()
    await pool.request()
        .input('titulo', sql.NVarChar, Titulo)
        .input('director', sql.NVarChar, Director)
        .input('comentario', sql.Text, Comentario)
        .input('actores', sql.NVarChar, Actores)
        .input('year', sql.Int, Year)
        .input('trailer', sql.NVarChar, Trailer)
        .query(querys.createMovie);

    res.json({Titulo, Director, Comentario, Actores, Year, Trailer});
}


export const getById = async (req, res) => {
    const {id} = req.params;
    const pool = await connect()
    const result = await pool.request()
        .input('id', sql.Int, id)
        .query(querys.getById);
    res.json(result.recordset[0]);
}


export const delMovieById = async (req, res) => {
    const {id} = req.params;
    
    const pool = await connect()
    await pool.request()
        .input('id', sql.Int, id)
        .query(querys.delete);
    res.sendStatus(204);
}

export const updtMovie = async (req, res) => {
    const {Titulo, Director, Comentario, Actores, Year, Trailer} = req.body;
    const {id} = req.params;

    if(Titulo==null || Comentario==null || Director==null || Actores==null || Year==null || Trailer==null){
        return res.status(400).json({msg: "Hay campos faltantes"});
    }

    try{
        const pool = await connect()
        await pool.request()
            .input('titulo', sql.NVarChar, Titulo)
            .input('director', sql.NVarChar, Director)
            .input('comentario', sql.Text, Comentario)
            .input('actores', sql.NVarChar, Actores)
            .input('year', sql.Int, Year)
            .input('trailer', sql.NVarChar, Trailer)
            .input('id', id)
            .query(querys.update);
        res.json({Titulo, Director, Comentario, Actores, Year, Trailer});
    } catch(err){
        res.status(500);
        res.send(err.message);
    }
    
}
