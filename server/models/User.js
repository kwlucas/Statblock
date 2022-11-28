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

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const salt = 10;
      this.password = await bcrypt.hash(this.password, salt);
    }
  
    next();
});
  
  userSchema.methods.checkPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };
  
  