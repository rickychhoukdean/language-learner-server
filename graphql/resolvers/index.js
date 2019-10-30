const Card = require("../../mongo/models/Card");
const Quiz = require("../../mongo/models/Quiz");

module.exports = {
  cards: async () => {
    try {
      const card = await Card.find().exec();
      if (!card) {
        throw new Error("card not found");
      } else {
        return card;
      }
    } catch (error) {
      throw new Error(error);
    }
  },
  quiz: async () => {
    try {
      const card = await Quiz.find().exec();
      if (!card) {
        throw new Error("card not found");
      } else {
        return card;
      }
    } catch (error) {
      throw new Error(error);
    }
  },
  createQuiz: async args => {
    const quiz = new Quiz({ name: args.quizInput.name });
    quiz
      .save()
      .then(result => {
        console.log(result);
        return {...result._doc};
      })
      .catch(err => {
        console.log(err);
      });
  }
};
