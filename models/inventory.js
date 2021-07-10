const mongoose = require("mongoose");
// const inventoryItem = {
//   item: "journal",
//   qty: 25,
//   size: { h: 14, w: 21, uom: "cm" },
//   status: "A",
// };

const inventorySchema = new mongoose.Schema(
  {
    item: String,
    qty: Number,
    size: {
      h: Number,
      w: Number,
      uom: String,
    },
    status: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("inventory", inventorySchema);
