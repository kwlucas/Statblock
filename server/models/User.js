const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    characters: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Character',
        },
    ],
});
  