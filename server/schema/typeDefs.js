const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Character {
    _id: ID
    name: String
    race: String
    description: String
    statset: Statset
  }

  type Statset {
    _id: ID
    type: String
    class: String
    background: String
    level: Int
    status: String
    health: healthObj
    ac: Int
    movement: movementObj
    abilities: abilityObj
    skills: skillObj
    spellSlots: [Int]
    traits: [traitObj]
    inventory: [itemObj]
  }

  type healthObj {
    hp: Int
    mhp: Int
  }

  type movementObj {
    walking: Int
    flying: Int
    climbing: Int
    swimming: Int
    primary: String
  }

  type abilityObj {
    strength: Int
    dexterity: Int
    constitution: Int
    intelligence: Int
    wisdom: Int
    charisma: Int
  }

  type skillObj: {
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

  type traitObj {
    feature: String
    details: String
    priority: Int
  }

  type itemObj {
    item: String
    quantity: Int
    details: String
    priority: Int
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
  }

  input UserData {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Query {
    users: [User]
    user(_id: ID!): User
    characters(user: ID): [Character]
    character(_id: ID!): Character
    statset(_id: ID!): Statset
  }

  type Mutation {
    createCharacter(Character: CharacterData): Character
    createUser(User: UserData): User
    login(email: String!, password: String!): Auth
    removeCharacter(characterId: ID!): Character
  }
`;

// statset: [Statset]



// input Statset {
//   _id: ID
// }



module.exports = typeDefs;
