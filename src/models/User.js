import mongoose from "mongoose"
import { stringify } from "querystring"

const { Schema } = mongoose

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        unique: true, // for username
        required: true, 
    },
    email:{
        type: String,
        unique: true, // for email
        required: true, 
    },
    password:{
        type: String,
        required: true, 
    },
    
}, 
 {timestamp: true } // created_at , updated_at
)

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;