
const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({

    name : {
        type : String,
    },
    dob : {
        type : String,
    },
    city : {
        type : String,
    },
    creditScore: {
        type: Number
    },
    loanAmount : {
        type: Number
    }

},{
    timestamps : true
})

const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;