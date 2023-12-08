const User = require("../models/User");

const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    let user = await User.findOne({ email });
    // checck if user exists
    if (user) {
      // return res.status(400).json({ message: "User have already registered" });

      throw  new Error("User have already registered")
    }
    // if not create new user
    user = await User.create({
      name,
      email,
      password,
    });

    return res.status(201).json({
      _id: user._id,
      avatar: user.avatar,
      name: user.name,
      email: user.email,
      verified: user.verified,
      admin: user.admin,
      token: await user.generateJWT(),
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { registerUser };
