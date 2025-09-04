const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    customerDetails : {
        name: {type: String, required: true},
        phone: {type: String, required: true},
        guests: {type: Number, required: true}
    },
    orderStatus: {
        type: String,
        required: true
    },
    orderDate: {
        type: Date,
        default: Date.now()
    },
    bills : {
        totals: {type: String, required: true},
        tax : {type: String, required: true},
        totalWithTax : {type: String, required: true}
    },
    items : [],
    table: { type: mongoose.Schema.Types.ObjectId, ref: "Table"}
},{timestamps: true})


module.exports = mongoose.model("Order", orderSchema);