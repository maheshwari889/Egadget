const mongoose = require("mongoose")




//schema
let vendorDetailSchema = new mongoose.Schema({
    vendorId: {
        type: mongoose.Schema.Types.ObjectId   
    },
     venderName: {
        type:String,
        required:true
    },
     address: {
        type: String
    },
    stateId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "state"
    },
    cityId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "city"
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    pincode: {
        type: Number
    },
    contactNum: {
        type: Number
    },
    customerSupportNumber: {
        type: Number
    },
    feedbackemail:{
        type:String
    },
})



//model
let vendorDetailModel = mongoose.model("vendorDetail", vendorDetailSchema)


module.exports = vendorDetailModel