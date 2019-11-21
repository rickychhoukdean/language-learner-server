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
    try {
      const quiz = await Quiz.create({
        name: args.quizInput.name
      });
      if (!quiz) {
        throw new Error("create qUIZ failed");
      } else {
        return { ...quiz._doc };
      }
    } catch (error) {
      throw new Error("error while creating Card " + error);
    }
  },
  createCard: async args => {
    try {
      const card = await Card.create({
        english: args.cardInput.english,
        french: args.cardInput.french,
        picture: args.cardInput.picture,
        quiz: args.cardInput.quiz.name
      });
      if (!card) {
        throw new Error("create card failed");
      } else {
        return { ...card._doc };
      }
    } catch (error) {
      throw new Error("error while creating Card " + error);
    }
  }

  // }
};
