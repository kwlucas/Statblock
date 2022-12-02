const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Character {
    _id: ID
    name: String
    owner: User!
    race: String
    description: String
    statset: Statset
  }

  type Statset {
    _id: ID
    type: String
    attachedTo: Character!
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

  type skillObj {
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
    username: String!
    email: String!
    password: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  input CharacterData {
    name: String!
    race: String
    description: String
  }

  input UserData {
    username: String!
    email: String!
    password: String!
  }

  input StatsetData {
    type: String
    class: String
    background: String
    level: Int
    status: String
    health: healthObjData
    ac: Int
    movement: movementObjData
    abilities: abilityObjData
    skills: skillObjData
    spellSlots: [Int]
    traits: [traitObjData]
    inventory: [itemObjData]
  }

  input healthObjData {
    hp: Int
    mhp: Int
  }

  input movementObjData {
    walking: Int
    flying: Int
    climbing: Int
    swimming: Int
    primary: String
  }

  input abilityObjData {
    strength: Int
    dexterity: Int
    constitution: Int
    intelligence: Int
    wisdom: Int
    charisma: Int
  }

  input skillObjData {
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

  input traitObjData {
    feature: String
    details: String
    priority: Int
  }

  input itemObjData {
    item: String
    quantity: Int
    details: String
    priority: Int
  }

  type Query {
    users: [User]
    user(_id: ID!): User
    characters(user: ID): [Character]
    character(_id: ID!): Character
    statset(_id: ID!): Statset
  }

  type Mutation {
    createUser(User: UserData): Auth
    login(email: String!, password: String!): Auth
    createCharacter(Character: CharacterData): Character
    updateCharacter(_id: ID!, Character: CharacterData): Character
    createStatset(attachedTo: ID!): Statset
    updateStatset(_id: ID!, Statset: StatsetData): Statset
    removeCharacter(characterId: ID!): Character
    removeStatset(statsetId: ID!): Statset
  }
`;



module.exports = typeDefs;
