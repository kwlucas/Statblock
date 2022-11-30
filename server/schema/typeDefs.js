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
    type: String
    class: String
    background: String
    level: Int
    status: String
    health: {
      hp: Int
      mhp: Int
    }
    ac: Int
    movement: {
      walking: Int
      flying: Int
      climbing: Int
      swimming: Int
      primary: String
    }
    abilities: {
      strength: Int
      dexterity: Int
      constitution: Int
      intelligence: Int
      wisdom: Int
      charisma: Int
    }
    skills: {
      acrobatics: String
      animalHandling: String
      arcana: String
      athletics: String
      deception: String
      history: String
      insight: String
      intimidation: String
      investigation: String
      medicine: String
      nature: String
      perception: String
      performance: String
      persuasion: String
      religion: String
      sleightOfHand: String
      stealth: String
      survival: String
    }
    spellSlots: [Int]
    traits: [
      {
        feature: String
        details: String
        priority: Int
      }
    ]
    inventory: [{
      item: String
      quantity: Int
      details: String
      priority: Int
    }]
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
    statset: Statset
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
