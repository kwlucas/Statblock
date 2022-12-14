import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query getUser($user: ID) {
    users(_id: $user) {
      _id
      username
      email
    }
  }
`;

export const QUERY_CHARACTERS = gql`
query getCharacters($userId: ID!) {
  characters(userId: $userId) {
    _id
    owner {
      _id
    }
    name
    race
    description
    statset {
      _id
      level
      class
    }
  }
}
`;

export const QUERY_CHARACTER = gql`
query getCharacter($characterId: ID!) {
  character(characterId: $characterId) {
    _id
    owner {
      _id
    }
    name
    description
    race
    statset {
      _id
    }
  }
}
`;

export const QUERY_STATSET = gql`
  query getStatset($character: ID) {
    statset(attachedTo: $character) {
      _id
      type
      attachedTo
      class
      background
      level
      status
      health {
        hp
        mhp
      }
      movement {
        walking
        flying
        climbing
        swimming
        primary
      }
      abilities {
        strength
        dexterity
        costitution
        intelligence
        wisdom
        charisma
      }
      skills {
        acrobatics
        animalHanding
        arcana
        athletics
        deception
        history
        insight
        intimidation
        investigation
        medicine
        nature
        perception
        performance
        persuasion
        religion
        sleightOfHand
        stealth
        survial
      }
      spellslots
      traits {
        feature
        details
        priority
      }
      inventory {
        item
        quantity
        details
        priority
      }
    }
  }
`;
