const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Character {
    _id: ID
    name: String
    race: String
    description: String
    statset: [Statset]
    }
    type Statset {
    _id: ID
    
  }

  type User {
    _id: ID
    title: String
    userId: ID!
    votes: Int
  }
  type Auth {
      token: ID!
      user: User
  }

  input CharacterData {
    _id: ID
    name: String
    race: String
    description: String
    statset: [Statset]
  }
  input Statset {
      _id: ID

  }


  type Query {
    
    users: [Users]
    user(id: ID!): User
    statset(id: ID!): Statset

  }

  type Mutation {
    createStatset(Character: CharacterData): characterResponse
    createCharacter(user: UserData): userResponse
    login(email: String!, password: String!): Auth
  }
`;





module.exports = typeDefs;
