const mongoose = require("mongoose")




//schema
let orderdetailSchema = new mongoose.Schema({
    orderdetailId:{
        type: mongoose.Schema.Types.ObjectId,
    },
    paymentId: {
        type: mongoose.Schema.Types.ObjectId,
        
    },
    status: {
        type: Number
    },
    amount: {
        type: Number
    },
    type: {
        type: Number
    },
    transcationcode: {
        type: mongoose.Schema.Types.ObjectId,
        ref = "vendorproductid"
    },
    
})


//model
let orderdetailModel = mongoose.model("orderdetail",paymentSchema)


module.exports = paymentModel