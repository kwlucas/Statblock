const { Schema, model } = require('mongoose');

const characterSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    race: {
        type: String,
    },
    description: {
        type: String,
    },
    stats: {
        type: Schema.Types.ObjectId,
        ref: 'Statset',
    },
});

const Character = model('character', characterSchema);

module.exports = Character;
