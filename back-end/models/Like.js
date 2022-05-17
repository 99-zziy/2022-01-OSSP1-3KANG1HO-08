const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const likeSchema = mongoose.Schema(
  {
    userFrom: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    // ObjectId를 타입으로 하면 ref:"User"를 통해 User.js 에서 유저 정보를 가져올 수 있음.
    
  }
  
);

const Like = mongoose.model("Like", likeSchema);

module.exports = { Like };