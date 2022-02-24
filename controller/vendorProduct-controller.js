
const vendorDetailModel = require("../model/venderProduct-model")



module.exports.addvendorproduct = function (req, res) {
    let vendorproductId = req.body.vendorproductId
    let productId = req.body.productId
    let vendorId = req.body.vendorId
    let qty = req.body.qty
    let price = req.body.price
    
      


    let vendorproduct = new vendorDetailModel({
        vendorproductId: vendorId,
        productId: productId,
        vendorId: vendorId,
        qty: qty,
        price: price
       
    })

    vendorproduct.save(function (err, sucess) {
        if (err) {
            console.log(err);
            //sendMailtoDev(err)
            res.json({ msg: "error", status: -1, data: res.err })
        } else {
            res.json({ msg: "vendorproduct added......", status: 200, data: sucess })
        }
    })
}


//list


module.exports.getAllvendorproduct = function (req, res) {
    vendorproductModel.find().populate().exec(function (err, data) {
        if (err) {
            console.log(err);
            //sendMailtoDev(err)
            res.json({ msg: "error", status: -1, data: res.err })
        } else {
            res.json({ msg: "vendorproduct retrived......", status: 200, data: data })
        }
    })
}


//delete

module.exports.deletevendorproduct = function (req, res) {
    let vendorproductId = req.params.vendorproductId

    customervendorproduct.deleteOne({ _id: vendorproduct }, function (err, data) {
        if (err) {
            console.log(err);
            //sendMailtoDev(err)
            res.json({ msg: "error", status: -1, data: res.err })
        } else {
            res.json({ msg: "vendorproduct removed......", status: 200, data: data })
        }
    })
}
//update

module.exports.updatevendorproduct = function (req, res) {
    let vendorproductId = req.body.vendorproductId
    

    vendorproductModel.updateOne({ _id: vendorproductId }, { isDefault: isDefault }, function (err, data) {
        if (err) {
            console.log(err);
            //sendMailtoDev(err)
            res.json({ msg: "error", status: -1, data: res.err })
        } else {
            res.json({ msg: "vendorproduct updated......", status: 200, data: data })
        }
    })

}