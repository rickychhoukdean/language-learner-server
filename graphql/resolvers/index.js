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
  quizzes: async () => {
    try {
      console.log("hi");
      const card = await Quiz.find().exec();
      if (!card) {
        console.log("hi");
        throw new Error("card not found");
      } else {
        console.log("hi");
        return card;
      }
    } catch (error) {
      console.log("hi");
      throw new Error(error);
    }
  },
  createQuiz: async args => {
    console.log("sfioasfoiasb")
    try {
      console.log("iohoias")
      const quiz = await Quiz.create({
        name: args.quizInput.name
      });
      if (!quiz) {
        console.log("quiz")
        throw new Error("Error while creating new comment");
      } else {
        console.log("no")
        return quiz;
      }
    } catch (error) {
      throw new Error("Errors occurs when creating user " + error);
    }
  }
};
