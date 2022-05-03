
const mongoose = require('mongoose');

const loanDetailSchema = new mongoose.Schema({

    loanAmount: {
        type: Number,
        default: 0
    },
    creditScore: {
        type: Number,
        default: 0
    },
    age: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        default: null
    },
    rateOfIntrest: {
        type: Number,
        default: 0
    },
    city: {
        type: String,
        default: null
    },
    principle: {
        type: Number,
        default: 0
    },
    interest: {
        type: Number,
        default: 0
    }

},{
    timestamps: true
});

const loanDetail = mongoose.model('loanDetail', loanDetailSchema);
module.exports = loanDetail;