const vendorDetailModel = require("../model/vendorDetail-model")



module.exports.addvendorDetail = function (req, res) {
    let vendorId = req.body.vendorId
    let vendorName = req.body.Name
    let address = req.body.address
    let stateId = req.body.stateId
    let cityId = req.body.cityId
    let userId = req.body.userId
    let pincode = req.body.pincode
    let customerNum = req.body.customerNum
    let customerSupportNumber = req.body.customerSupportNumber
    let feedbackemail = req.body.feedbackemail
      


    let vendorDetail = new vendorDetailModel({
        vendorId: vendorId,
        vendorName: vendorName,
        address: address,
        stateId: stateId,
        cityId: cityId,
        userId: userId,
        pincode: pincode,
        customerNum: customerNum,
        customerSupportNumber: customerSupportNumber,
        feedbackemail: feedbackemail
         

        
    })

    vendorDetail.save(function (err, sucess) {
        if (err) {
            console.log(err);
            //sendMailtoDev(err)
            res.json({ msg: "error", status: -1, data: res.err })
        } else {
            res.json({ msg: "vendorDetail added......", status: 200, data: sucess })
        }
    })
}


//list


module.exports.getAllvendorDetail = function (req, res) {
    vendorDetailModel.find().populate().exec(function (err, data) {
        if (err) {
            console.log(err);
            //sendMailtoDev(err)
            res.json({ msg: "error", status: -1, data: res.err })
        } else {
            res.json({ msg: "vendorDetail retrived......", status: 200, data: data })
        }
    })
}


//delete

module.exports.deletevendorDetail = function (req, res) {
    let vendorDetailId = req.params.vendorDetailId

    customervendorDetail.deleteOne({ _id: vendorDetail }, function (err, data) {
        if (err) {
            console.log(err);
            //sendMailtoDev(err)
            res.json({ msg: "error", status: -1, data: res.err })
        } else {
            res.json({ msg: "vendorDetail removed......", status: 200, data: data })
        }
    })
}
//update

module.exports.vendorDetailAddress = function (req, res) {
    let vendorDetailId = req.body.vendorDetailId
    let isDefault = req.body.isDefault

    vendorDetailModel.updateOne({ _id: vendorDetailId }, { isDefault: isDefault }, function (err, data) {
        if (err) {
            console.log(err);
            //sendMailtoDev(err)
            res.json({ msg: "error", status: -1, data: res.err })
        } else {
            res.json({ msg: "vendorDetail updated......", status: 200, data: data })
        }
    })

}