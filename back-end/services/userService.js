'use strict';
let User = require('models/user');
module.exports = {
    getUserById: async (id) => {
        return await User.findById(id);
    },
    getAllUsers: async () => {
        return User.findAll();
    },
    saveUser: async (user, options) => {
        if(user.validate()){
            return await user.save(options);
        }
    }
};