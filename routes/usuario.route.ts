import { Router } from 'express';
import usuarioController from '../controllers/usuario.controller';
const usuarioRouter = Router();

usuarioRouter.get('/', usuarioController.usuarioIndex)

usuarioRouter.get('/cadastrar/:nome', usuarioController.cadastrar)

export default usuarioRouter;