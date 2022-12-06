const { AuthenticationError } = require("apollo-server-express");
const { User, Character, Statset } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return await User.find();
    },
    user: async (parent, { userId }) => {
      return await User.findById(userId);
    },
    characters: async (parent, { userId }) => {
      const characters = await Character.find({ owner: userId });

      return characters;
    },
    character: async (parent, { characterId }, context) => {
      if (context.user) {
        const character = await Character.find({
          _id: characterId,
          owner: context.user.id,
        }).populate("stats");
      }
    },
    statset: async (parent, { statsetId }) => {
      return await Statset.findById(statsetId);
    },

    user: async (parent, { UserId }) => {
      return User.findOne({ _id: userId });
    },
  },

  Mutation: {
    createUser: async (parent, { username, email, password }) => {
      console.log('Sign up resolver');
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      console.log('Sign in resolver');
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No User with this email found!");
      }

      const correctPw = await user.checkPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);
      return { token, user };
    },

    // Add a third argument to the resolver to access data in our `context`
    createCharacter: async (parent, {name, race, description}, context) => {
      if (context.user) {
        const newCharacter = await Character.create({owner: context.user._id, name, race, description});
        return newCharacter;
      }
      // If user attempts to execute this mutation and isn't logged in, throw an error
      throw new AuthenticationError("You need to be logged in!");
    },
    createStatset: async (parent, { attachedTo, statsetObj }, context) => {
      if (context.user) {
        const newStatset = await Statset.create({ attachedTo, ...statsetObj });
        await Character.findOneAndUpdate(
          { _id: attachedTo },
          { statset: newStatset._id }
        );
        return newStatset;
      }
      // If user attempts to execute this mutation and isn't logged in, throw an error
      throw new AuthenticationError("You need to be logged in!");
    },
    updateCharacter: async (parent, { characterId, characterObj }, context) => {
      if (context.user) {
        const character = await Character.findOneAndUpdate(
          { _id: characterId, owner: context.user.id },
          characterObj
        );
        return character;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    updateStatset: async (parent, { statsetId, statsetObj }, context) => {
      if (context.user) {
        const statset = await Statset.findOneAndUpdate(
          { _id: statsetId },
          statsetObj
        );
        return statset;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    // Make it so a logged in user can only remove a character they own
    removeCharacter: async (parent, { characterId }, context) => {
      if (context.user) {
        //Find and delete character where owned by user
        const character = await Character.findOneAndDelete({
          _id: characterId,
          owner: context.user.id,
        });
        return character;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeStatset: async (parent, { statsetId }, context) => {
      if (context.user) {
        const statset = await Statset.findOneAndDelete({ _id: statsetId });
        return statset;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
