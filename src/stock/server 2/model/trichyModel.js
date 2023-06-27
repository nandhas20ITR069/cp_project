const mongoose = require("mongoose");
const TrichySchema = new mongoose.Schema({
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

const Trichy = mongoose.model("Trichy", TrichySchema);

module.exports = Trichy;