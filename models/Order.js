const mongoose = require("mongoose");
///const products = require("../data/Products");

const orderItemSchema =  mongoose.Schema({
  name: { Type: String, required: true },
  qty: { Type: Number, required: true },
  image: { Type: String, required: true },
  price: { type: Number, required: true },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
})

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  orderItems: [orderItemSchema],
  shippingAddress: {
    address: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
  },

paymentMethod: {type:String, reqired:true, default:"Payme"},
paymentResult: {
    id: { type: String },
    status: { type: String},
    updated_time: { type: String},
    email_address: { type: String},
  },

taxPrice:{
  type: Number, 
  required:true, 
  default:0.0,
}, 

shippingPrice:{
  type: Number, 
  required: true, 
  default: 0.0,
},

isPaid:{
  type: Boolean, 
  required: true, 
  default: false,
},

paidAt: {
  type: Date,
},

isDelivered: {
  type: Boolean, 
  required: true, 
  default: false,
},

deliveredAt:{
  type: Date,
},
}, 
{timestamps: true}
);

module.exports = mongoose.model("Order", orderSchema)