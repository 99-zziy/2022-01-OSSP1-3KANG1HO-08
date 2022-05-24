const { Schema } = require("mongoose");
const mongoose = require("mongoose");
const { User } = require("./User");

const feedSchema = mongoose.Schema(
  {
    userFrom: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
    },
    // ObjectId를 타입으로 하면 ref:"User"를 통해 User.js 에서 유저 정보를 가져올 수 있음.

    title: {
      type: String,
    },
    contents: {
      type: String,
    },
    tag: {
      type: Array,
    },
  },
  { timestamps: true }
);
console.log(feedSchema);
const Feed = mongoose.model("Feed", feedSchema);

module.exports = { Feed };
