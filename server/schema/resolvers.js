const { AuthenticationError } = require('apollo-server-express');
const { User, Character } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find();
        },

        user: async (parent, { UserId }) => {
            return User.findOne({ _id: userId });
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
        // Make it so a logged in user can only remove a character they own
        removeCharacter: async (parent, { character }, context) => {
            if (context.user) {
                //Find and delete character where owned by user
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },
};

module.exports = resolvers;

