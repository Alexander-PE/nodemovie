import {Router} from "express";
import {getPelis, createPelis, getById, delMovieById, updtMovie} from "../controllers/pelis.controller";


const router = Router();

router.get('/pelis', getPelis);

router.post('/pelis', createPelis);

router.get('/pelis/:id', getById);

router.delete('/pelis/:id', delMovieById);

router.put('/pelis/:id', updtMovie);

export default router;