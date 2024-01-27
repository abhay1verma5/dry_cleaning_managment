const mongoose = require("mongoose");

const appSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, require: true },
    status: {
      type: String,
      enum: ["pending", "confirmed"],
      default: "pending",
    },
    pickupDate: { type: String, require: true },
    serviceType: { type: String,enum: ["Fast", "Regular"], default: "Regular" },
    topwears: { type: String, default: "NO" },
    total_topwears: { type: String, default: "NO" },
    bottomwears: { type: String, default: "NO" },
    total_bottomwears: { type: String, default: "NO" },
    woolenCloths: { type: String, default: "NO" },
    total_woolenCloths: { type: String, default: "NO" },
    contactNumber: { type: String },
   bedsheet_blanket: { type: String, default: "NO" },
   total_bedsheet_blanket: { type: String, default: "NO" },
    description: { type: String, default: "NO" },
  },
  {
    versionKey: false,
  }
);
 
const LaundryRequest = mongoose.model("app", appSchema);

module.exports = LaundryRequest;
