const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema(
  {
    Name: { type: String, required: true },
    Address: { type: String, required: true },
    Contacth67umber: { type: String, required: true },
    contactNumber: { type: String, required: true },
    email: { type: String, required: true },
  },
  { collection: "customer" }
);480

// CustomerSchema.index({ firstName: 1 }, { unique: true });

const model = mongoose.model("Customer", CustomerSchema);

module.exports = model;
