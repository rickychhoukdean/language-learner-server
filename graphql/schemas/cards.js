exports.Card=`
type Card{
    _id: ID!
    english: String!
    french: String!
    picture: String!
}
`

exports.CardInput=`
name: String!
english: String!
french: String!
picture: String!
`

exports.CardQueries=`
cards(name:String): [Card!]!
`

exports.CardMutations=`
createCard(cardInput: cardInput): cardInput!
updateCard(cardId: ID!, cardInput: cardInput!): cardInput!
deleteCard(cardId:ID!): cardInput!
`