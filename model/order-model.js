const mongoose = require("mongoose")




//schema
let orderSchema = new mongoose.Schema({
    orderId:{
        type: mongoose.Schema.Types.ObjectId,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref = "userId"
    },
    total: {
        type: Number
    },
    statusId: {
        type: mongoose.Schema.Types.ObjectId,
        ref = "statusId"
    },
    addressId: {
        type: mongoose.Schema.Types.ObjectId,
        ref = "addressId"
    }
})


//model
let orderModel = mongoose.model("order",orderSchema)


module.exports = orderModel