const mongoose = require("mongoose");
const { Schema } = mongoose;

const listSchema = new Schema({
  body: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("List", listSchema);
