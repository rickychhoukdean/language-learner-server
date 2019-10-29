const { buildSchema } = require("graphql");

module.exports = buildSchema(
  `
      type Card{
        _id: ID!
        english: String!
        french: String!
        picture: String!
        quiz: Tag!
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

      type RootMutation {
        createQuiz(cardInput: CardInput): Card
        createUser(quizInput: QuizInput): QuizInput
      }

      schema{
        query: RootQuery
        mutation: RootMutation
      }
    `
);
