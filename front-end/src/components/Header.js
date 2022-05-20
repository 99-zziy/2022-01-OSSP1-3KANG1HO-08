import React from "react";
import logo from "../assets/img/logo.png";
import profile from "../assets/icon/default_profile.png";
import search from "../assets/icon/search.png";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { PrimaryColor } from "../assets/color/color";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
  margin: 10px 5px;
  padding: 0 20px;
`;

const Logo = styled.img`
  width: 200px;
`;

const LoginHeaderContainer = styled.div`
  display: flex;
  width: 380px;
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
  margin: auto 0;
`;

const TextDecoration = styled.a`
  text-decoration: none;
  color: white;
`;

const ProfileButton = styled.img`
  width: 40px;
  height: 40px;
  margin: auto 0;
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
  console.log(user, isLogin);
  return (
    <HeaderContainer>
      <Logo src={logo}></Logo>
      {isLogin ? (
        <LoginHeaderContainer>
          <SearchBar>
            <SearchInput></SearchInput>
            <SearchIcon src={search}></SearchIcon>
          </SearchBar>
          <Button>{"새 글 작성"}</Button>
          <ProfileButton src={profile}></ProfileButton>
        </LoginHeaderContainer>
      ) : (
        <LogoutHeaderContainer>
          <SearchBar>
            <SearchInput></SearchInput>
            <SearchIcon src={search}></SearchIcon>
          </SearchBar>
          <Button>
            <TextDecoration href="/login">{"로그인"}</TextDecoration>
          </Button>
        </LogoutHeaderContainer>
      )}
    </HeaderContainer>
  );
}

export default Header;
