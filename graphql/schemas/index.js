const { buildSchema } = require("graphql");

module.exports = buildSchema(
  `
      type Card{
        _id: ID
        english: String
        french: String
        picture: String
        quiz: Quiz
      }

      type Quiz{
        _id: ID!
        name: String!
        cards: [Card]!
      }

      input CardInput{
        name: String!
        english: String!
        french: String!
        picture: String!
      }

      input QuizInput{
        name: String!
      }

      type RootQuery{
        quizzes: [Quiz]
        cards: [Card]
        card(english: String): Card! 
      }

      type RootMutation {
        createCard(cardInput: CardInput): Card
        createQuiz(quizInput: QuizInput): Quiz
      }

      schema{
        query: RootQuery
        mutation: RootMutation
      }
    `
);
