const Customer=require('../models/customer')

//setup api
//list
module.exports.list=(req,res)=>{
    Customer.find({user: req.user._id})
        .then((customers)=>{
            res.json(customers)
        })
        .catch((err)=>{
            res.json(err)
        })
}

//Create
module.exports.create = (req, res) => {
    const body = req.body
    const customer = new Customer(body)
    customer.user = req.user._id
    customer.save()
        .then((customer) => {
            res.json({
                notice: 'successfully created a customer', 
                customer
            })
        })
        .catch((err) => {
            res.json(err)
        })
}

//Show
module.exports.show = (req, res) => {
    const id = req.params.id
    Customer.findOne({_id: id,user: req.user._id})
        .then((customer) => {
            if (customer) {
                res.json(customer)
            } 
            else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

//Update/Edit
module.exports.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Customer.findOneAndUpdate({_id: id,user: req.user._id}, 
        body, {new: true, runValidators: true})
        .then((customer) => {
            if (customer) {
                res.json(customer)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

//Delete
module.exports.destroy = (req, res) => {
    const id = req.params.id
    Customer.findOneAndDelete({_id: id,user: req.user._id})
        .then((customer) => {
            if (customer) {
                res.json(customer)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}