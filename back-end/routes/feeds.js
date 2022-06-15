const express = require("express");
const { User } = require("../models/User");
const { Feed } = require("../models/Feed");
const router = express.Router();
const neo4j = require("neo4j-driver");
const driver = neo4j.driver(
  "bolt://localhost:7687",
  neo4j.auth.basic("neo4j", "1234")
);
const session = driver.session();

//피드 생성
router.post("/feeds", (req, res) => {
  Feed.create(req.body, async (err, feeds) => {
    const tagList = [];

    if (err) return res.json(err);
    try {
      const merge = await session.run(
        //neo4j tag relation 생성
        `
           MERGE(a : Tag {title: $title1})
           MERGE(b : Tag {title: $title2})
           MERGE(c : Tag {title: $title3})
           MERGE(a)-[r:relates]->(b)
           MERGE(a)-[:relates]->(c)
           MERGE(b)-[:relates]->(c)
           MERGE(c)-[:relates]->(b)
           MERGE(b)-[:relates]->(a)
           MERGE(c)-[:relates]->(a)
           `,
        {
          title1: req.body.tag[0],
          title2: req.body.tag[1],
          title3: req.body.tag[2],
        }
      );

      //neo4j에서 graph 생성
      const makeGraph = await session.run(
        `CALL gds.graph.project('myGraph','Tag','relates')`
      );
      //pagerank를 통한 추천도 검색
      const result = await session.run(
        ` MATCH(a:Tag {title: $title1}),(b:Tag {title:$title2}),(c:Tag {title:$title3})
            CALL gds.pageRank.stream('myGraph',{
             maxIterations:20, 
             dampingFactor:0.85, 
            sourceNodes:[a,b,c]
            })
            YIELD nodeId, score
            RETURN gds.util.asNode(nodeId).title as name, score
            ORDER BY score DESC
            LIMIT 6
            `,
        {
          title1: req.body.tag[0],
          title2: req.body.tag[1],
          title3: req.body.tag[2],
        }
      );

      result.records.map((record) => {
        tagList.push(record.get("name"));
      });
    } finally {
      const dropGraph = await session.run(`CALL gds.graph.drop('myGraph')`);
      // await session.close();
    }
    console.log(tagList);
    return res.status(200).send({ feeds: feeds, tagList });
  });
});

//피드 수정
router.put("/feeds/:id", (req, res) => {
  req.body.updateAt = Date.now();
  Feed.findOneAndUpdate({ _id: req.params.id }, req.body, (err, feeds) => {
    if (err) return res.json(err);

    return res.status(200).send({ feeds: feeds });
  });
});

//글 조회
router.get("/feeds/:id", async (req, res) => {
  const feed = await Feed.findOne({ _id: req.params.id });
  if (!feed) return res.json(err);
  const user = await User.findOne({ _id: feed.userFrom });
  if (!user) return res.json(err);
  return res.status(200).send({ feeds: feed, userEmail: user.email });
});

//피드 삭제
router.delete("/feeds/:id", (req, res) => {
  Feed.deleteOne({ _id: req.params.id }, (req, res) => {
    if (err) return res.json(err);
  });
});

//피드 전체 리스트
router.get("/feeds", (req, res) => {
  Feed.find({})
    .sort("-createdAt")
    .exec((err, feeds) => {
      if (err) return res.json(err);
      return res.status(200).send({ feeds: feeds });
    });
});

//피드 태그 불러오기
router.get("/feeds/tag/:tag", async (req, res, next) => {
  const feed = await Feed.find({ tag: req.params.tag });
  if (!feed) return res.json(err);
  return res.status(200).send({ tag: feed });
});

module.exports = router;
