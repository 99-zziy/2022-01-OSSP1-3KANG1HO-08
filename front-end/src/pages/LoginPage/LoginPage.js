import React from "react";
import styled from "styled-components";
import { PrimaryColor } from "../../assets/color/color";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 70px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
`;
const Title = styled.div`
  display: flex;
  height: 50px;
  font-size: xx-large;
  font-weight: 700;
`;
const Sub = styled.div`
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 300px;
  display: inline-block;
  padding: 12px 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const LoginButton = styled.button`
  width: 300px;
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

const Form = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0;
`;

const VeriPeri = styled.a`
  color: #6667ab;
  text-decoration: none;
  font-weight: 700;
`;

function LoginPage() {
  return (
    <div>
      <Container>
        <Title>로그인</Title>
        <Sub>
          또는 <VeriPeri href="/register"> 회원 가입</VeriPeri>
        </Sub>
        <Form>
          <Input
            type="text"
            name="id"
            placeholder="아이디를 입력하세요"
          ></Input>
          <p />
          <Input
            type="password"
            name="password"
            placeholder="비밀번호를 입력하세요"
          ></Input>
          <p />
          <LoginButton>로그인</LoginButton>
        </Form>
      </Container>
    </div>
  );
}

export default LoginPage;
