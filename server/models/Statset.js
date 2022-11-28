const { Schema, model } = require('mongoose');

const statsetSchema = new Schema({
    type: {
        type: String,
        required: true,
        default: 'dnd5e',
    },
    class: {
        type: String,
    },
    level: {
        type: Number,
    },
    status: {
        type: String,
    },
    health: {
        hp: Number,
        mhp: Number
    },
    ac: {
        type: Number
    },
    movement: {
        walking: Number,
        flying: Number,
        climbing: Number,
        swimming: Number,
        primary: {
            type: String,
            default: 'walking',
        }
    },
    abilities: {
        strength: Number,
        dexterity: Number,
        constitution: Number,
        intelligence: Number,
        wisdom: Number,
        charisma: Number,
    },
    skills: {
        acrobatics: {
            type: String,
            default: 'none'//Either 'none', 'proficient', or 'expert' 
        },
        animalHandling: {
            type: String,
            default: 'none'
        },
        arcana: {
            type: String,
            default: 'none'
        },
        athletics: {
            type: String,
            default: 'none'
        },
        deception: {
            type: String,
            default: 'none'
        },
        history: {
            type: String,
            default: 'none'
        },
        insight: {
            type: String,
            default: 'none'
        },
        intimidation: {
            type: String,
            default: 'none'
        },
        investigation: {
            type: String,
            default: 'none'
        },
        medicine: {
            type: String,
            default: 'none'
        },
        nature: {
            type: String,
            default: 'none'
        },
        perception: {
            type: String,
            default: 'none'
        },
        performance: {
            type: String,
            default: 'none'
        },
        persuasion: {
            type: String,
            default: 'none'
        },
        religion: {
            type: String,
            default: 'none'
        },
        sleightOfHand: {
            type: String,
            default: 'none'
        },
        stealth: {
            type: String,
            default: 'none'
        },
        survival: {
            type: String,
            default: 'none'
        },
    },
    spellSlots: [Number], //Index of number coresponds to the spell slot level
    traits: [
        {
            feature: String,
            details: String,
            priority: Number //Number that determines order of listing
        }
    ],
    inventory: [
        {
            item: String,
            quantity: {
                type: Number,
                default: 1
            },
            details: String,
            priority: Number
        }
    ],
});

const Statset = model('statset', statsetSchema);

module.exports = Statset;