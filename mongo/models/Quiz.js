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

const Quiz  = mongoose.model("Quiz", QuizSchema);

Quiz.create({
  name: "Clothes",
  cards: [
    {
      english: "sweater",
      french: "le sweater",
      picture:
        "`https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/408712/item/goods_04_408712.jpg?width=1557&impolicy=quality_75`"
    },
    {
      english: "hat",
      french: "le hat",
      picture:
        "`https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/408712/item/goods_04_408712.jpg?width=1557&impolicy=quality_75`"
    },
    {
      english: "pants",
      french: "le pants",
      picture:
        "`https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/408712/item/goods_04_408712.jpg?width=1557&impolicy=quality_75`"
    },
    {
      english: "scarf",
      french: "le scarf",
      picture:
        "`https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/408712/item/goods_04_408712.jpg?width=1557&impolicy=quality_75`"
    }
  ]
});

module.exports = Quiz
