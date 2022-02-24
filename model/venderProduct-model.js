const mongoose = require("mongoose")




//schema
let vendorProductSchema = new mongoose.Schema({
    vendorProductId: {
        type: mongoose.Schema.Types.ObjectId 
    },
    ProductId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "productId"
    },
    vendorId: {
        type: mongoose.Schema.Types.ObjectId ,
        ref: "vendorId"
    }, 
    qty: {
        type: Number
    },
    price: {
        type: Number
    }
        
})



//model
let vendorProductModel = mongoose.model("vendorproduct", vendorProductSchema)
