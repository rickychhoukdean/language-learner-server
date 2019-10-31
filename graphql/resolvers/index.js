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
        return { ...result._doc };
      })
      .catch(err => {
        console.log(err);
      });
  },
  createCard: async args => {
    console.log(args.cardInput.quiz.name)
    const card = new Card({
      english: args.cardInput.english,
      french: args.cardInput.french,
      picture: args.cardInput.picture,
      quiz: args.cardInput.quiz.name
    });

    console.log(card);

    if (args.cardInput.quiz) {
      try {
        const quiz = await Quiz.findOne({ name: args.cardInput.quiz }).exec();
        console.log(quiz);

        if (!quiz) {
          return card;
        } else {
          console.log(quiz);
        }
      } catch (err) {
        throw new Error(error);
      }
    }
  }
};
