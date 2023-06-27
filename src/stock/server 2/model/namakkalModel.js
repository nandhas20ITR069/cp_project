const mongoose = require("mongoose");
const NamakalSchema = new mongoose.Schema({
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

const Namakal = mongoose.model("Namakal", NamakalSchema);

module.exports = Namakal;