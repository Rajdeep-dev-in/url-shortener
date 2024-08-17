import mongoose from "mongoose";

// define out schema

const urlSchema = new mongoose.Schema({
    short_url: {
        type: String,
        required: true,
        unique: true,
    },
    redirect_url: {
        type: String,
        required: true,
    },
    visit_History: [
        {
            time_Stamp: {
                type: Number
            }
        }
    ]
}, {
    timestamps: true
})

// Create a model 

const URL = mongoose.model('url', urlSchema)

// export the model

export default URL