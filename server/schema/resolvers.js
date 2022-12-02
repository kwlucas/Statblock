const { AuthenticationError } = require('apollo-server-express');
const { User, Character, Statset } = require('../models');
const { signToken } = require('../utils/auth');

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
            if(context.user){
                const character = await Character.find({_id: characterId, owner: context.user.id }).populate('stats')
            }
        },
        statset: async (parent, { statsetId }) => {
            return await Statset.findById(statsetId);
        },


    },

    Mutation: {
        createUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);

            return { token, User };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No User with this email found!');
            }

            const correctPw = await user.checkPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect password!');
            }

            const token = signToken(user);
            return { token, User };
        },

        // Add a third argument to the resolver to access data in our `context`
        createCharacter: async (parent, characterObj, context) => {
            if (context.user){
                const character = await Character.create(characterObj);
                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { characters: character._id } }
                );
                return character
            }
            // If user attempts to execute this mutation and isn't logged in, throw an error
            throw new AuthenticationError('You need to be logged in!');
        },
        updateCharacter: async (parent, { characterId, characterObj }, context) => {
            if (context.user) {
                const character = await Character.findOneAndUpdate({ _id: characterId, owner: context.user.id }, characterObj);
                return character;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        // Make it so a logged in user can only remove a character they own
        removeCharacter: async (parent, { characterId }, context) => {
            if (context.user) {
                //Find and delete character where owned by user
                const character = await Character.findOneAndDelete({ _id: characterId, owner: context.user.id });
                return character;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },
};

module.exports = resolvers;

