const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UserSChema = new Schema(
  {
    avaatar: { type: String, default: "" },
    name: { type: String, required: true },
    emaail: { type: String, required: true },
    password: { type: String, required: true },
    verified: { type: Boolean, default: false },
    verificationCode: { type: String, required: false },
    admin: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);


const User = model("User", UserSChema);

module.exports = User;
