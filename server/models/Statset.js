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
});