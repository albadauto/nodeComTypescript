import { Request, Response } from "express";
import usuarioModel from "../models/usuario.model";

class UsuarioController{
    
    public async cadastrar(req: Request,res: Response): Promise<Response>{
        const usuario = await usuarioModel.create({nome:req.params.nome});
        return res.json(req.params.nome);
    }

    public usuarioIndex(req: Request, res: Response): void{
        res.render('index');
    }
}

export default new UsuarioController();