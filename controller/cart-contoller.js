const cartModel = require("../model/cart-model")



module.exports.addcart = function (req, res) {
    let cartId = req.body.Id
    let userId = req.body.userId
    let vendorproductId = req.body.vendorproductId
    let qty = req.body.qty
    
      


    let cart = new cartModel({
        cart: cartId,
        userId: productId,
        vendorproductId: vendorproductId,
        qty: qty,
    
       
    })

    cart.save(function (err, sucess) {
        if (err) {
            console.log(err);
            //sendMailtoDev(err)
            res.json({ msg: "error", status: -1, data: res.err })
        } else {
            res.json({ msg: "cart added......", status: 200, data: sucess })
        }
    })
}


//list


module.exports.getAllcart= function (req, res) {
    cartModel.find().populate().exec(function (err, data) {
        if (err) {
            console.log(err);
            //sendMailtoDev(err)
            res.json({ msg: "error", status: -1, data: res.err })
        } else {
            res.json({ msg: "cart retrived......", status: 200, data: data })
        }
    })
}


//delete

module.exports.deletecart = function (req, res) {
    let cartId = req.params.cartId

    customercart.deleteOne({ _id: cart }, function (err, data) {
        if (err) {
            console.log(err);
            //sendMailtoDev(err)
            res.json({ msg: "error", status: -1, data: res.err })
        } else {
            res.json({ msg: "cart removed......", status: 200, data: data })
        }
    })
}
//update

module.exports.updatecart = function (req, res) {
    let cart = req.body.cart
    

    cart.updateOne({ _id: cart }, { isDefault: isDefault }, function (err, data) {
        if (err) {
            console.log(err);
            //sendMailtoDev(err)
            res.json({ msg: "error", status: -1, data: res.err })
        } else {
            res.json({ msg: "cart updated......", status: 200, data: data })
        }
    })

}