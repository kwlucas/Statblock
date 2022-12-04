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

export const QUERY_CHARCTERS = gql`
  query getCharacters($user: ID) {
    characters(owner: $user)
  }
`;

export const QUERY_CHARACTER = gql`
  query getCharacter($characterID: ID) {
    character(_id: $characterID) {
      _id
      name
      owner
      race
      description
      statset
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
