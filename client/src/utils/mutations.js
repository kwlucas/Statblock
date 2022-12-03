import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($name: String!, $email: String!, $password: String!) {
    createUser(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const CREATE_CHARACTER = gql`
  mutation createCharacter($characterObj: {}, $context: ID) {
    createCharacter(characterObj: $characterObj, context: $context) {
      character
    }
  }
`;

export const CREATE_STATSET = gql`
mutation createStatset($attachedTo: ID!){
  createStatset(attachedTo: $attachedTo)
}`

export const REMOVE_STATSET = gql`
mutation removeStatset($arrachedTo: ID!){
  removeStatset(attachedTo: $attachedTO)
}`

export const REMOVE_CHARACTER = gql`
mutation removeCharacter(characterId: $characterId){
  _id
  description
  owner{
    _id
  }
  race
  statset{
    _id
    type
    attachedTo{

    }
    class
    background
    level
    status
    health{

    }
    ac
    movement{

    }
    abilities{

    }
    skills{

    }
    spellSlots
    traits{

    }
    inventory {

    }
  }
}`