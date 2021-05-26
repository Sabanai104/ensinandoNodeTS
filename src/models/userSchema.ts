import {Schema, model, Document} from 'mongoose';


const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String, 
        required: true
    }
});

export default model('User', userSchema);