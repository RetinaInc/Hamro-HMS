'use strict';
let User = require('models/user');
module.exports = {
    getUserByUuid: async (uuid) => {
        return  await User.findOne({where: {uuid: uuid, isDeleted: false}});
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
