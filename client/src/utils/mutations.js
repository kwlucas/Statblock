import { gql } from "@apollo/client";

export const CREATE_USER = gql`
mutation createUser($username: String!, $email: String!, $password: String!) {
  createUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
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
    }
  }
}
`;

export const CREATE_CHARACTER = gql`
mutation createCharacter($character: CharacterData) {
  createCharacter(Character: $character) {
    _id
    name
    owner {
      _id
      username
    }
    race
    description
    statset {
      _id
    }
  }
}`;

export const CREATE_STATSET = gql`
  mutation CreateStatset($id: ID!, $character: CharacterData) {
    updateCharacter(_id: $id, Character: $character) {
      _id
      description
      name
      owner {
        _id
        username
        email
        password
      }
      race
      statset {
        _id
        type
        attachedTo {
          _id
          name
          owner {
            _id
            username
            email
            password
          }
          race
          description
          statset {
            _id
            type
            attachedTo
            class
            background
            level
          }
          class
          background
          level
          status
          health {
            hp
            mhp
          }
          ac
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
            constitution
            intelligence
            wisdom
            charisma
          }
          skills {
            acrobatics
            animalHandling
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
            survival
          }
          spellSlots
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
      class
      background
      level
      status
      health {
        hp
        mhp
      }
      ac
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
        constitution
        intelligence
        wisdom
        charisma
      }
      skills {
        acrobatics
        animalHandling
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
        survival
      }
      spellSlots
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

export const REMOVE_STATSET = gql`
    mutation RemoveStatset($statsetId: ID!) {
      removeStatset(statsetId: $statsetId) {
        _id
        ac
        attachedTo {
          _id
          name
          race
          description
        }
        background
        class
        health {
          hp
          mhp
        }
        inventory {
          item
          quantity
          details
          priority
        }
        level
        movement {
          walking
          flying
          climbing
          swimming
          primary
        }
        skills {
          acrobatics
          animalHandling
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
          survival
        }
        status
        spellSlots
        traits {
          feature
          details
          priority
        }
        type
      }
    }
    `;

export const REMOVE_CHARACTER = gql`
mutation RemoveCharacter($characterId: ID!) {
  removeCharacter(characterId: $characterId) {
    _id
    description
    name
    owner {
      _id
      username
      email
      password
    }
    race
  }
}`;

export const UPDATE_CHARACTER = gql`
  mutation UpdateCharacter($id: ID!, $character: CharacterData) {
    updateCharacter(_id: $id, Character: $character) {
      _id
      description
      name
      owner {
        _id
        username
        email
        password
      }
      race
      statset {
        _id
        type
        attachedTo {
          _id
          name
          owner {
            _id
            username
            email
            password
          }
          race
          description
          statset {
            _id
            type
            attachedTo {
              _id
              name
              race
              description
            }
            class
            background
            level
            status
            health {
              hp
              mhp
            }
            ac
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
              constitution
              intelligence
              wisdom
              charisma
            }
            skills {
              acrobatics
              animalHandling
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
              survival
            }
            spellSlots
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
        class
        background
        level
        status
        health {
          hp
          mhp
        }
        ac
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
          constitution
          intelligence
          wisdom
          charisma
        }
        skills {
          acrobatics
          animalHandling
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
          survival
        }
        spellSlots
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
  }
`;

export const UPDATE_STATSET = gql`
 mutation UpdateStatset($id: ID!, $statset: StatsetData) {
  updateStatset(_id: $id, Statset: $statset) {
    _id
    abilities {
      strength
      dexterity
      constitution
      intelligence
      wisdom
      charisma
    }
    ac
    attachedTo {
      _id
      name
      race
      description
    }
    background
    class
    health {
      hp
      mhp
    }
    inventory {
      item
      quantity
      details
      priority
    }
    level
    movement {
      walking
      flying
      climbing
      swimming
      primary
    }
    skills {
      acrobatics
      animalHandling
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
      survival
    }
    spellSlots
    status
    traits {
      feature
      details
      priority
    }
    type
  }
}
`;
