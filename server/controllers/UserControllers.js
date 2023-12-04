const user = require("../models/User")

const registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;

        //check if user exists
        
    } catch (error) {
        
    }

}

module.exports = registerUser;