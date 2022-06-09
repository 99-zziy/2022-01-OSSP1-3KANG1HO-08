const express = require("express");
const { User } = require("../models/User");
const { Feed } = require("../models/Feed");
const router = express.Router();

  //피드 생성
  router.post("/feeds", (req, res) => {

    Feed.create(req.body, (err, feeds) => {
      if (err) return res.json(err);
  
      return res.status(200).send({ feeds: feeds })
  
    });
  });
  
  //피드 수정
  router.put("/feeds/:id", (req, res) => {
    req.body.updateAt = Date.now();
    Feed.findOneAndUpdate({ _id: req.params.id }, req.body, (err, feeds) => {
      if (err) return res.json(err);
  
      return res.status(200).send({ feeds: feeds })
    });
  });
  
  
  //글 조회
  router.get('/feeds/:id', async (req, res) => {
    const feed = await Feed.findOne({ _id: req.params.id });
    if(!feed) return res.json(err);
    const user = await User.findOne({_id: feed.userFrom});
    if(!user) return res.json(err);
    return res.status(200).send({ feeds: feed, userEmail: user.email })
  });
  
  //피드 삭제
  router.delete('/feeds/:id', (req, res) => {
    Feed.deleteOne({ _id: req.params.id }, (req, res) => {
      if (err) return res.json(err);
    });
  });

  //피드 전체 리스트
  router.get('/feeds', (req, res) => {
    Feed.find({})
      .sort('-createdAt')
      .exec((err, feeds) => {
        if (err) return res.json(err);
        return res.status(200).send({ feeds: feeds });
      });
  });

  
  router.get("/feeds/tag/:tag", async(req, res, next)=>{
    const feed = await Feed.find({tag : req.params.tag})
    if(!feed) return res.json(err);
    return res.status(200).send({tag: feed })
  })
  
  module.exports = router