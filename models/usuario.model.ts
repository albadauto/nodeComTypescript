import { Schema, model } from 'mongoose';

const MensagemSchema = new Schema({
    texto:{
        type: String
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },
    remetente:{
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    destinatario:{
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    }
})

export default model('Mensagem', MensagemSchema);