import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    qty: {
      type: Number,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    mode: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Order", orderSchema);
