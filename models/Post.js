import mongoose from "mongoose"

const { Schema } = mongoose

import { stringify } from "querystring"


const postSchema = new Schema({
    title:{
        type: string,
        required: true, 
    },
    desc:{
        type: string,
        required: true, 
    },
    img:{
        type: string,
        required: true, 
    },
    content:{
        type: string,
        required: true, 
    },
    username:{
        type: string,
        required: true, 
    },
    
}, 
 {timestamp: true } // created_at , updated_at
)

export default mongoose.model("Post", userSchema)