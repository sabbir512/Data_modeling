const mongoose = require("mongoose");

const oderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    orderItems: {
      type: [oderItemSchema],
    },

    address:{
        type: String,
        required: true
    },
    status:{
        type: String,
        enum: ["PENDING", "CANCEL", "DELIVERED"],
        default: "PENDING"
      }
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
