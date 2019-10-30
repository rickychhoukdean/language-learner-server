const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardSchema = new Schema({
  english: {
    type: String
  },
  french: {
    type: String
  },
  picture: {
    type: String
  },
  quiz: {
    type: Schema.Types.ObjectId,
    ref: "Quiz"
  }
});
module.exports =  mongoose.model("Card", CardSchema);
