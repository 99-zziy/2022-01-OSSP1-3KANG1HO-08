//서버의 시작점
const express = require("express");
const { User } = require("../models/User");
const { auth } = require("../middleware/auth");

const router = express.Router();


router.post("/users/signup", (req, res) => {
  // 회원 가입할 때 넣는 정보들을 user에서 가져오면
  // 그것들을 데이터베이스에 넣어준다.

  const user = new User(req.body);
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});


router.post("/users/login", async (req, res) => {
  // 요청된 이메일을 데이터베이스에서 있는지 찾는다.
  const user = await User.findOne({ email: req.body.email });
  if (!user)
    return res.json({
      loginSuccess: false,
      message: "이메일에 해당하는 유저가 없습니다.",
    });

  // 요청된 이메일이 데이터베이스에 있다면 비밀번호가 일치하는지 확인한다.
  return user.comparePassword(req.body.password, (err, isMatched) => {
    if (!isMatched)
      return res.json({
        loginSuccess: false,
        message: "비밀번호가 틀렸습니다.",
      });

    // 비밀번호까지 일치하다면 토큰을 생성한다.
    user.generateToken((err, user) => {
      if (err) return res.status(400).send(err);

      res// 토큰을 쿠키에 저장
        .cookie("x_auth", user.token)
        .status(200)
        .json({ loginSuccess: true, userId: user._id });
    });
  });
});
router.get("/users/auth", auth, (req, res) => {
    // 여기까지 미들웨어를 통과해 왔다는 얘기는 Authentication이 true라는 것.
    res.status(200).json({
      _id: req.user._id,
      isAdmin: req.user.role === 0 ? false : true,
      isAuth: true,
      email: req.user.email,
      name: req.user.name,
    });
  });
  
  router.get("/users/logout", auth, (req, res) => {
    console.log(req);
    User.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, user) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).send({ success: true });
    });
  });
  
  module.exports = router