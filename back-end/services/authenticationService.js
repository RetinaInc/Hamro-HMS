'use strict';
let User = require('models/user');
let Person = require('models/person');
module.exports = {
    getLoginUser: async (session) => {
        let userData = {
            isLogin : false
        };
        let loginUser = null;

        if (session.userUuid) {
            loginUser = await User.findOne({
                where: {uuid: session.userUuid, isDeleted: false}, include: [
                    {model: Person},
                ]
            });
        }

        if (loginUser !== null) {
            userData = {
                uuid: loginUser.uuid,
                userName: loginUser.userName,
                person: {
                    uuid: loginUser.person.uuid,
                    fullName: loginUser.person.fullName,
                    gender: loginUser.person.gender
                },
                isLogin: true
            };
        }

        return userData;
    }
};
