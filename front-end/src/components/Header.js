import React from "react";
import logo from "../assets/img/logo.png";
import profile from "../assets/icon/default_profile.png";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { PrimaryColor } from "../assets/color/color";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 200px;
`;

const LoginHeaderContainer = styled.div`
  display: flex;
  width: 160px;
  justify-content: space-between;
  align-items: center;
`;

const LoginButton = styled.button`
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
  margin: auto 0;
`;

const ProfileButton = styled.img`
  width: 40px;
  height: 40px;
  margin: auto 0;
`;

function Header() {
  const user = useSelector((state) => state.persistReducer.user);
  const isLogin = user.isLogin;

  return (
    <HeaderContainer>
      <Logo src={logo}></Logo>
      {isLogin ? (
        <LoginHeaderContainer>
          <LoginButton>{"새 글 작성"}</LoginButton>
          <ProfileButton src={profile}></ProfileButton>
        </LoginHeaderContainer>
      ) : (
        <LoginButton>{"로그인"}</LoginButton>
      )}
    </HeaderContainer>
  );
}

export default Header;
