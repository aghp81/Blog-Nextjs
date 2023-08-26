import mongoose from "mongoose"
import { stringify } from "querystring"

const { Schema } = mongoose

const userSchema = new Schema({
    name:{
        type: string,
        unique: true, // for username
        required: true, 
    },
    email:{
        type: string,
        unique: true, // for email
        required: true, 
    },
    password:{
        type: string,
        required: true, 
    },
    
}, 
 {timestamp: true } // created_at , updated_at
)

export default mongoose.model("User", userSchema)