const mongoose = require("mongoose")


//schema
let statusSchema = new mongoose.Schema({
    statusId: {
        type: mongoose.Schema.Types.ObjectId
    },
    status: {
        type: Number
    } 
})



//model

let statusModel = mongoose.model("status", statusSchema)


module.exports = statusModel