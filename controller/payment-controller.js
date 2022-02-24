const paymentModel = require("../model/payment-model")



module.exports.addpayment = function (req, res) {
    let orderId = req.body.orderId
    let paymentId= req.body.paymentdetailId
    let status = req.body.status
    let amount= req.body.amount
    let type = req.body.type
    let transactionCode = req.body.transactionCode


    let payment = new paymentModel({
        orderId: orderId,
        paymentId: paymentId,
        status: status,
        amount: amount,
        type: type,
        transactionCode: transactionCode
         
    })

    payment.save(function (err, sucess) {
        if (err) {
            console.log(err);
            //sendMailtoDev(err)
            res.json({ msg: "error", payment: -1, data: res.err })
        } else {
            res.json({ msg: "payment added......", payment: 200, data: req.body })
        }
    })
}



module.exports.getAllpayment = function (req, res) {
    paymentModel.find(function (err, sucess) {
        if (err) {
            console.log(err);
            res.json({ msg: "error while finding payment", payment: -1, data: res.err })
        } else {
            res.json({ msg: "retriving all payment", payment: 200, data: sucess })
        }
    })
}

module.exports.deletepayment = function (req, res) {
    let paymentId = req.params.paymentId
    paymentModel.deleteOne({ _id: paymentId }, function (err, sucess) {
        if (err) {
            console.log(err)
            res.json({ msg: "error while deleting payment", payment: -1, data: res.err })
        } else {
            res.json({ msg: "sucessfully payment is deletes", payment: 200, data: sucess })
        }
    })
}

module.exports.updatepayment = function (req, res) {
    let paymentId = req.body.paymentId
    

    paymentModel.updateOne({ _id: paymentId }, { paymentName : paymentName},function (err,sucess) {
        if (err) {
            console.log(err)
            res.json({ msg: "error while updating payment", payment: -1, data: res.err })
        } else {
            res.json({ msg: "sucessfully payment is updated", payment: 200, data: sucess })
        }
    })
}                                                    