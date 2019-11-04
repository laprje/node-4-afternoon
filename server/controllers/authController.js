const users = require('../models/users');

let id = 1;

module.exports = {
    login: (req, res) => {
        const {session} = req;
        const {username, password} = req.body;

        const user = users.find(
            user => user.username === username && user.password === password
        );
    },

    register: (req, res) => {
        if(req.body.username && req.body.password) {
            let user = req.session.user;
            user.id = id;
            users.push(user)
            id++;
            session.user.username = username;
            res.status(200).send(req.session.user)
        }
    },

    signout: (req, res) => {
        req.session.destroy();
        return(req.session);
    }
}