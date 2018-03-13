'use strict';
let User = require('models/user');
let encrypter = require('node-password-encrypter');
module.exports = {
    getUserById: async (id) => {
        return await User.findById(id);
    },
    getAllUsers: async () => {
        return await User.findAll();
    },
    saveUser: async (user, options) => {
        if (user.validate()) {
            return await user.save(options);
        }
    },
    getUserByUserName: async (userName) => {
        return await User.findOne({where: {userName: userName, isDeleted: false}});
    }
};
