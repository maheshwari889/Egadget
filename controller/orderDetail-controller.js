const orderdetailModel = require("../model/orderdetail-model")



module.exports.addorderdetail = function (req, res) {
    let orderdetailId= req.body.orderdetaildetailId
    let orderId = req.body.orderId
    let totalId = req.body.totalId
    let qty = req.body.qty
    let price = req.body.price
    let vendorproductId = req.body.vendorproductId


    let orderdetail = new orderdetailModel({
        orderdetailId: orderdetailId,
        orderId: orderId,
        userId: userId,
        qty: qty,
        price: price,
        venderproductId: vendorproductId 
    })

    orderdetail.save(function (err, sucess) {
        if (err) {
            console.log(err);
            //sendMailtoDev(err)
            res.json({ msg: "error", orderdetail: -1, data: res.err })
        } else {
            res.json({ msg: "orderdetail added......", orderdetail: 200, data: req.body })
        }
    })
}



module.exports.getAllorderdetail = function (req, res) {
    orderdetailModel.find(function (err, sucess) {
        if (err) {
            console.log(err);
            res.json({ msg: "error while finding orderdetail", orderdetail: -1, data: res.err })
        } else {
            res.json({ msg: "retriving all orderdetail", orderdetail: 200, data: sucess })
        }
    })
}

module.exports.deleteorderdetail = function (req, res) {
    let orderdetailId = req.params.orderdetailId
    orderdetailModel.deleteOne({ _id: orderdetailId }, function (err, sucess) {
        if (err) {
            console.log(err)
            res.json({ msg: "error while deleting orderdetail", orderdetail: -1, data: res.err })
        } else {
            res.json({ msg: "sucessfully orderdetail is deletes", orderdetail: 200, data: sucess })
        }
    })
}

module.exports.updateorderdetail = function (req, res) {
    let orderdetailId = req.body.orderdetailId
    

    orderdetailModel.updateOne({ _id: orderdetailId }, { orderdetailName : orderdetailName},function (err,sucess) {
        if (err) {
            console.log(err)
            res.json({ msg: "error while updating orderdetail", orderdetail: -1, data: res.err })
        } else {
            res.json({ msg: "sucessfully orderdetail is updated", orderdetail: 200, data: sucess })
        }
    })
}                                                    