const mongoose = require("mongoose")




//schema
let cartSchema = new mongoose.Schema({
    cartId: {
        type: mongoose.Schema.Types.ObjectId 
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userId"
    },
    vendorproductId: {
        type: mongoose.Schema.Types.ObjectId ,
        ref: "vendorproductId"
    }, 
    qty: {
        type: Number
    },
    
        
})



//model
let cartModel = mongoose.model("cart", cartSchema)
