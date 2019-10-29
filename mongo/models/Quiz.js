const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuizSchema = new Schema({
  name: {
    type: String
  },
  cards: [
    {
      type: Schema.Types.ObjectId,
      ref: "Card"
    }
  ]
});

const Quiz = mongoose.model("Quiz", QuizSchema);

module.exports = Quiz;
