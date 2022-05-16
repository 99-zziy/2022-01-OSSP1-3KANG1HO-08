import React from "react";
import logo from "../assets/img/logo.png";
import styled from "styled-components";
import { PrimaryColor } from "../assets/color/color";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 200px;
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

function Header() {
  return (
    <HeaderContainer>
      <Logo src={logo}></Logo>
      <LoginButton>{"로그인"}</LoginButton>
    </HeaderContainer>
  );
}

export default Header;
