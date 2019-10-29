exports.Quiz=`
type Quiz{
    _id: ID!
    english: String!
    french: String!
    picture: String!
}
`

exports.QuizInput=`
name: String!
english: String!
french: String!
picture: String!
`

exports.QuizQueries=`
Quizs(name:String): [Quiz!]!
`

exports.QuizMutations=`
createQuiz(quizInput: QuizInput): QuizInput!
updateQuiz(quizId: ID!, quizInput: QuizInput!): QuizInput!
deleteQuiz(quizId:ID!): QuizInput!
`