const statusModel = require("../model/status-model")



module.exports.addstatus = function (req, res) {
    let statusId= req.body.statusId

    let status = new statusModel({
        status: status
    })

    status.save(function (err, sucess) {
        if (err) {
            console.log(err);
            //sendMailtoDev(err)
            res.json({ msg: "error", status: -1, data: res.err })
        } else {
            res.json({ msg: "status added......", status: 200, data: req.body })
        }
    })
}



module.exports.getAllstatus = function (req, res) {
    statusModel.find(function (err, sucess) {
        if (err) {
            console.log(err);
            res.json({ msg: "error while finding status", status: -1, data: res.err })
        } else {
            res.json({ msg: "retriving all status", status: 200, data: sucess })
        }
    })
}

module.exports.deletestatus = function (req, res) {
    let statusId = req.params.statusId
    statusModel.deleteOne({ _id: statusId }, function (err, sucess) {
        if (err) {
            console.log(err)
            res.json({ msg: "error while deleting status", status: -1, data: res.err })
        } else {
            res.json({ msg: "sucessfully status is deletes", status: 200, data: sucess })
        }
    })
}

module.exports.updatestatus = function (req, res) {
    let statusId = req.body.statusId
    let statusName = req.body.statusName

    statusModel.updateOne({ _id: statusId }, { statusName : statusName},function (err,sucess) {
        if (err) {
            console.log(err)
            res.json({ msg: "error while updating status", status: -1, data: res.err })
        } else {
            res.json({ msg: "sucessfully status is updated", status: 200, data: sucess })
        }
    })
}                                                    