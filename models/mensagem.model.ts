import { Schema, model } from 'mongoose';

const UsuarioSchema = new Schema({
    nome:{
        type: String
    },
    senha:{
        type: String
    },
    avatar:{
        type: String
    }
})

export default model('Usuario', UsuarioSchema);