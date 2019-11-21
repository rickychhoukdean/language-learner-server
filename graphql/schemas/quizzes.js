exports.Quiz=`
type Quiz{
    _id: ID!
}
`

exports.QuizInput=`
name: String!
`

exports.QuizQueries=`
Quizs(name:String): [Quiz!]!
`

exports.QuizMutations=`
createQuiz(quizInput: QuizInput): QuizInput!
updateQuiz(quizId: ID!, quizInput: QuizInput!): QuizInput!
deleteQuiz(quizId:ID!): QuizInput!
`