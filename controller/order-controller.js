const orderModel = require("../model/order-model")



module.exports.addorder = function (req, res) {
    let orderId= req.body.orderId
    let userId = req.body.userId
    let totalId = req.body.totalId
    let statusId = req.body.statusId
    let addressId = req.body.addressId


    let order = new orderModel({
        orderId: orderId,
        userId: userId,
        total: totel,
        statusId: statusId,
        addressId: addressId 
    })

    order.save(function (err, sucess) {
        if (err) {
            console.log(err);
            //sendMailtoDev(err)
            res.json({ msg: "error", order: -1, data: res.err })
        } else {
            res.json({ msg: "order added......", order: 200, data: req.body })
        }
    })
}



module.exports.getAllorder = function (req, res) {
    orderModel.find(function (err, sucess) {
        if (err) {
            console.log(err);
            res.json({ msg: "error while finding order", order: -1, data: res.err })
        } else {
            res.json({ msg: "retriving all order", order: 200, data: sucess })
        }
    })
}

module.exports.deleteorder = function (req, res) {
    let orderId = req.params.orderId
    orderModel.deleteOne({ _id: orderId }, function (err, sucess) {
        if (err) {
            console.log(err)
            res.json({ msg: "error while deleting order", order: -1, data: res.err })
        } else {
            res.json({ msg: "sucessfully order is deletes", order: 200, data: sucess })
        }
    })
}

module.exports.updateorder = function (req, res) {
    let orderId = req.body.orderId
    

    orderModel.updateOne({ _id: orderId }, { orderName : orderName},function (err,sucess) {
        if (err) {
            console.log(err)
            res.json({ msg: "error while updating order", order: -1, data: res.err })
        } else {
            res.json({ msg: "sucessfully order is updated", order: 200, data: sucess })
        }
    })
}                                                    