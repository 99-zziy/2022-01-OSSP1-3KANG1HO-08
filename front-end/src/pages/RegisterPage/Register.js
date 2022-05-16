import React from "react";
import styled from "styled-components";
import { PrimaryColor } from "../../assets/color/color";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 40px;
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
  height: 100px;
  font-size: xx-large;
  font-weight: 700;
`;

const InputContainer = styled.div`
  margin-bottom: 20px;
  font-weight: 700;
`;

const Input = styled.input`
  width: 300px;
  display: inline-block;
  padding: 12px 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Button = styled.button`
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

function Register() {
  return (
    <div>
      <Container>
        <Title>회원 가입</Title>
        <Form>
          <InputContainer>
            아이디
            <p />
            <Input type="text" name="id" placeholder="아이디" />
          </InputContainer>
          <InputContainer>
            비밀번호
            <p />
            <Input
              type="password"
              name="password"
              placeholder="비밀번호"
            ></Input>
          </InputContainer>
          <InputContainer>
            비밀번호 확인
            <p />
            <Input
              type="password"
              name="password"
              placeholder="비밀번호 확인"
            ></Input>
          </InputContainer>
          <p />
          <Button>회원가입</Button>
        </Form>
      </Container>
    </div>
  );
}

export default Register;
