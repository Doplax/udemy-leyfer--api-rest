const mongoose = require("mongoose");

const UserScheme = mongoose.Schema(
  {
    name: { type: String },
    age: { type: Number },
    email: { type: String },
    password: { type: String , select:false},
    role: {
      type: ["user", "admin"],
      default: "user",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("users", UserScheme);
 