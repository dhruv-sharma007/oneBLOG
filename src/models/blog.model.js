import mongoose from 'mongoose'

const blogSchema = new blogSchema({
    title:{
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    coverImageUrl:{
        type: String,
        required: false,
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    }
}, {timestamps:true} )

const Blog = mongoose.model("Blog", blogSchema) 

export default Blog