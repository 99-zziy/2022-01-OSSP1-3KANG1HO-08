import React from "react";
import styled from "styled-components";
import { PrimaryColor } from "../../assets/color/color";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/user";
import { Signup } from "../../api/authApi";
import { useNavigate } from "react-router";

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

const TextDecoration = styled.a`
  text-decoration: none;
  color: white;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0;
`;

function Register(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("이메일 형식이 올바르지 않습니다.")
          .required("이메일은 필수 항목입니다."),
        password: Yup.string()
          .min(6, "최소 6자 이상 입력해주세요.")
          .required("비밀번호는 필수 항목입니다."),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password"), null], "비밀번호와 일치해야합니다.")
          .required("비밀번호 확인은 필수 항목입니다."),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          let dataToSumbit = {
            email: values.email,
            password: values.password,
          };
          Signup(dataToSumbit).then((res) => {
            console.log(res);
            if (res.success) {
              alert("회원 가입이 완료되었습니다.");
              navigate("/login");
            }
            // dispatch(
            //   registerUser({
            //     sign_up: res.success,
            //   })
            // );
            // if (res.success) {
            //   alert("회원 가입이 완료되었습니다.");
            //   navigate("/login");
            // }
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
          handleSubmit,
          handleBlur,
        } = props;
        return (
          <div>
            <Container>
              <Title>회원 가입</Title>
              <Form onSubmit={handleSubmit}>
                <InputContainer>
                  이메일
                  <p />
                  <Input
                    required
                    type="text"
                    id="email"
                    placeholder="이메일"
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
                    type="password"
                    id="password"
                    placeholder="비밀번호"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.password && touched.password
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.password && touched.password && (
                    <div className="input-feedback">{errors.password}</div>
                  )}
                </InputContainer>
                <InputContainer>
                  비밀번호 확인
                  <p />
                  <Input
                    required
                    type="password"
                    id="confirmPassword"
                    placeholder="비밀번호 확인"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.confirmPassword && touched.confirmPassword
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.confirmPassword && touched.confirmPassword && (
                    <div className="input-feedback">
                      {errors.confirmPassword}
                    </div>
                  )}
                </InputContainer>
                <p />
                <Button onClick={handleSubmit} disabled={isSubmitting}>
                  회원가입
                </Button>
              </Form>
            </Container>
          </div>
        );
      }}
    </Formik>
  );
}

export default Register;
