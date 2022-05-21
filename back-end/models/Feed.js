const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const feedSchema = mongoose.Schema(
  {
    userFrom: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    // ObjectId를 타입으로 하면 ref:"User"를 통해 User.js 에서 유저 정보를 가져올 수 있음.
    title: {
        type: String,
        minlength: 5
    },
    contents: {
        type: String,
    },
    tag: {
      type: String
    }

  },
  { timestamps: true }
);

const Feed = mongoose.model("Like", likeSchema);

module.exports = { Feed };