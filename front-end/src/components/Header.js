import React from "react";
import logo from "../assets/img/logo.png";
import profile from "../assets/icon/default_profile.png";
import search from "../assets/icon/search.png";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { PrimaryColor } from "../assets/color/color";
import { Logout } from "../api/authApi";
import { logoutUser } from "../store/user";
import { useNavigate } from "react-router";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f8f9fa;
  margin: 10px 5px;
  padding: 5px 20px;
`;

const Logo = styled.img`
  width: 200px;
  cursor: pointer;
`;

const LoginHeaderContainer = styled.div`
  display: flex;
  width: 480px;
  justify-content: space-between;
  align-items: center;
`;

const LogoutHeaderContainer = styled.div`
  display: flex;
  width: 330px;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  width: 100px;
  border: none;
  color: white;
  text-align: center;
  line-height: 2.5em;
  border-radius: 4px;
  background-color: ${PrimaryColor};
  font-weight: bold;
  font-size: 16px;
  height: 40px;
  margin: auto 4px;
  cursor: pointer;
`;

const TextDecoration = styled.a`
  text-decoration: none;
  color: white;
`;

const ProfileButton = styled.img`
  width: 40px;
  height: 40px;
  margin: auto 0;
  cursor: pointer;
`;

const SearchBar = styled.div`
  display: flex;
  border: 1px solid #ccc;
  border-radius: 10px;
  align-items: center;
  width: 200px;
  height: 40px;
  justify-content: space-around;
`;

const SearchInput = styled.input`
  width: 140px;
  height: 30px;
  border: none;
  outline: none;
`;

const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
`;

function Header() {
  const user = useSelector((state) => state.persistReducer.user);
  const isLogin = user.isLogin;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    Logout().then((res) => {
      console.log(res);
      dispatch(
        logoutUser({
          isLogin: false,
        })
      );
      navigate("/");
    });
    // axios
    //   .get(`${process.env.REACT_APP_SERVER_URL}/users/logout`)
    //   .then((response) => {
    //     if (response.status === 200) {
    //       navigate("/login");
    //     } else {
    //       alert("로그아웃 실패");
    //     }
    //   });
  };

  const loginHandler = () => {
    navigate("/login");
  };

  const writeHandler = () => {
    navigate("/write");
  };

  const logoHandler = () => {
    navigate("/");
  };

  return (
    <HeaderContainer>
      <Logo src={logo} onClick={logoHandler}></Logo>
      {isLogin ? (
        <LoginHeaderContainer>
          <SearchBar>
            <SearchInput></SearchInput>
            <SearchIcon src={search}></SearchIcon>
          </SearchBar>
          <Button>
            <TextDecoration onClick={writeHandler}>새 글 작성</TextDecoration>
          </Button>
          <Button>
            <TextDecoration onClick={logoutHandler}>로그아웃</TextDecoration>
          </Button>
          <ProfileButton src={profile}></ProfileButton>
        </LoginHeaderContainer>
      ) : (
        <LogoutHeaderContainer>
          <SearchBar>
            <SearchInput></SearchInput>
            <SearchIcon src={search}></SearchIcon>
          </SearchBar>
          <Button>
            <TextDecoration onClick={loginHandler}>{"로그인"}</TextDecoration>
          </Button>
        </LogoutHeaderContainer>
      )}
    </HeaderContainer>
  );
}

export default Header;
