const mongoose = require("mongoose")




//schema
let orderdetailSchema = new mongoose.Schema({
    orderdetailId:{
        type: mongoose.Schema.Types.ObjectId,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref = "userId"
    },
    qty: {
        type: Number
    },
    price: {
        type: Number
    },
    vendorproductid: {
        type: mongoose.Schema.Types.ObjectId,
        ref = "vendorproductid"
    },
    
})


//model
let orderdetailModel = mongoose.model("orderdetail",orderdetaildetailSchema)


module.exports = orderdetaildetailModel