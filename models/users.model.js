const {v4: uuidv4} = require("uuid");

const users = [
    {
        id: uuidv4(),
        userName: "Zahid Hassan",
        email: "restapi@gmail.com"
    },
    {
        id: uuidv4(),
        userName: "rakibul islam",
        email: "restapi@gmail.com"
    }
];

module.exports = users;