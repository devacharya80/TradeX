import mongoose, { Schema } from "mongoose";

const watchlistSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    percent: {
      type: String,
      required: true,
    },
    isDown: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Watchlist", watchlistSchema);
