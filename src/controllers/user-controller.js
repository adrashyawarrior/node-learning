const User = require("../models/user");

async function index(req, res) {
    try {
        const users = await User.find();
        res.send(users);
    } catch (error) {
        res.send(error);
    }
}

async function create(req, res) {
    try {
        let user = new User(req.body);
        user = await user.save();
        if (user)
            res.send('User created successfully.');
        else
            res.send('Something went wrong.');
    } catch (error) {
        res.send(error);
    }
}

module.exports = {
    index,
    create
};
