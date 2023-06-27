const mongoose = require("mongoose");
const TirupurSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
 
  description: {
    type: String,
    default: true,
  },
  price: {
    type: Number,
    default: 0,
  },
  stocks:{
    type: Number,
    default: 1
  }
});

const Tirupur = mongoose.model("Tirupur", TirupurSchema);

module.exports = Tirupur    ;