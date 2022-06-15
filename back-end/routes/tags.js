const express = require("express");
const router = express.Router();
const { Feed } = require("../models/Feed");


router.get("/tag/feeds/:tagList", async (req, res) => {
    console.log(req.params.tagList);
  
    let data = [];
    const tagList = req.params.tagList.split(",");
    await Promise.all(
      tagList.map(async (tagName) => {
        const feed = await Feed.find({ tag: tagName });
        return data.push({ tagName, feed });
      })
    );
    console.log(JSON.stringify(data))
    return res.status(200).send({ data: data });
  });

  module.exports = router