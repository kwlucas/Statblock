import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query getUser {
    users {
      _id
      username
      email

    }
  }
`;

export const QUERY_CHARCTERS = gql`
query getCharacters{
    user {
        
    }
}`

export const QUERY_CHARACTER = gql`
query getCharacter {
    character{
        _id
        name
        owner
        race
        description
        
    }
}`



export const QUERY_STATSET = gql`
query getStatset{
    statset {
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
}`