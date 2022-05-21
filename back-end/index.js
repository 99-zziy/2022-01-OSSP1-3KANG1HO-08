
    //서버의 시작점
    const express = require("express");
    const app = express();
    const port = 5000;
    const bodyParser = require("body-parser");
    const cookieParser = require("cookie-parser");
    const { User } = require("./models/User");
    const { auth } = require("./middleware/auth");
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    
    app.use(cookieParser());
    const mongoose = require("mongoose");  
    mongoose
        .connect('mongodb+srv://rkdgml:choi0730!A@laon.joias.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
        .then(() => console.log('MongoDB Connected...'))
        .catch(err => console.log(err))
    
    
    app.post("/users/signup", (req, res) => {
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
    
    app.post("/users/login", (req, res) => {
      // 요청된 이메일을 데이터베이스에서 있는지 찾는다.
      User.findOne({ email: req.body.email }, (err, user) => {
       
        if (!user) {
          return res.json({
            loginSuccess: false,
            message: "제공된 이메일에 해당하는 유저가 없습니다.",
          });
        }
        // 요청된 이메일이 데이터베이스에 있다면 비밀번호가 일치하는지 확인한다.
        user.comparePassword(req.body.password, (err, isMatched) => {
          if (!isMatched)
            return res.json({
              loginSuccess: false,
              message: "비밀번호가 틀렸습니다.",
            });
        });
        // 비밀번호까지 일치하다면 토큰을 생성한다.
        user.generateToken((err, user) => {
          if (err) return res.status(400).send(err);
    
          // 토큰을 쿠키에 저장
          res
            .cookie("x_auth", user.token)
            .status(200)
            .json({ loginSuccess: true, userId: user._id });
        });
      });
    });
    
    app.get("/api/users/auth", auth, (req, res) => {
      // 여기까지 미들웨어를 통과해 왔다는 얘기는 Authentication이 true라는 것.
      res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
      });
    });
    
    app.get("/users/logout", auth, (req, res) => {
      
      User.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, user) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).send({ success: true });
      });
    });
    
    app.post("/feeds")



    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
