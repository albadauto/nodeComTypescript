import express from 'express';
import mongoose from 'mongoose';
import usuarioRouter from './routes/usuario.route';
import flash from 'connect-flash';

export class App{
    private express = express.application;
    private port = 8080;

    constructor(){
        this.express = express();
        this.listen();
        this.database();
        this.routes();
        this.middlewares();
    }

    public getApp() : express.Application{
        return this.express;
    }

    private middlewares(): void{
        express.urlencoded({extended: true});
        this.express.set('view engine','ejs');
        this.express.use(flash());
        this.express.use(express.json());
    }


    private listen() : void {
        this.express.listen(this.port, () => console.log(`Ouvindo na porta ${this.port}`))
    }

    private database(): void {
        mongoose.connect("mongodb://localhost/collectFacil", () => console.log("Banco de dados conectado"))
    }

    private routes(){
        this.express.use('/', usuarioRouter)
    }
}