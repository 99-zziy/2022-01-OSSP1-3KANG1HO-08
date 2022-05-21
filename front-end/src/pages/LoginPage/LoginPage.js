import React, { useState } from "react";
import styled from "styled-components";
import { PrimaryColor } from "../../assets/color/color";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";
import { handleLogin } from "../../store/user";
import { Login } from "../../api/authApi";

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

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0;
`;

const VeriPeri = styled.a`
  color: #6667ab;
  text-decoration: none;
  font-weight: 900;
  font-size: large;
`;

function LoginPage(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formErrorMessage, setFormErrorMessage] = useState("");
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("이메일 형식이 올바르지 않습니다.")
          .required("이메일을 입력해주세요."),
        password: Yup.string()
          .min(6, "최소 6자리 이상 입력해주세요.")
          .required("비밀번호를 입력해주세요"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          let dataToSumbit = {
            email: values.email,
            password: values.password,
          };
          Login(dataToSumbit).then((res) => {
            console.log(res);
            if (!res.loginSuccess) setFormErrorMessage(res.message);
            // else {
            //   navigate("/");
            // }
            dispatch(
              handleLogin({
                userId: res.userId,
                isLogin: true,
              })
            );
            if (res.loginSuccess) navigate("/");
          });
          setSubmitting(false);
        }, 500);
      }}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;
        return (
          <div>
            <Container>
              <Title>로그인</Title>
              <Sub>
                또는 <VeriPeri href="/signup"> 회원 가입</VeriPeri>
              </Sub>
              <Form onSubmit={handleSubmit}>
                <InputContainer>
                  이메일
                  <p />
                  <Input
                    required
                    type="text"
                    id="email"
                    placeholder="이메일을 입력하세요"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.email && touched.email
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.email && touched.email && (
                    <div className="input-feedback">{errors.email}</div>
                  )}
                </InputContainer>
                <InputContainer>
                  비밀번호
                  <p />
                  <Input
                    required
                    id="password"
                    type="password"
                    placeholder="비밀번호를 입력하세요"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.passwrod && touched.passwrod
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.password && touched.password && (
                    <div className="input-feedback">{errors.password}</div>
                  )}
                </InputContainer>
                {formErrorMessage && (
                  <label>
                    <p
                      style={{
                        color: "#6667ab",
                        fontSize: "0.7rem",
                        border: "1px solid",
                        padding: "1rem",
                        borderRadius: "4px",
                      }}
                    >
                      {formErrorMessage}
                    </p>
                  </label>
                )}
                <p />
                <LoginButton
                  onClick={handleSubmit}
                  htmlType="submit"
                  className="login-form-button"
                  type="primary"
                  disabled={isSubmitting}
                >
                  로그인
                </LoginButton>
              </Form>
            </Container>
          </div>
        );
      }}
    </Formik>
  );
}

export default LoginPage;
