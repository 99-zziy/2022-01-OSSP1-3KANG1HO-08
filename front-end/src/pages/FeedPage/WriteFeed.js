import React, { useState } from "react";
import styled from "styled-components";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import * as Yup from "yup";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { PrimaryColor } from "../../assets/color/color";
import { Write } from "../../api/authApi";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 70px;
  border-radius: 4px;
  box-sizing: border-box;
  width: 100%;
  height: 700px;
`;

const Form = styled.form`
  margin: 0;
  padding: 0;
  max-height: 700px;
`;
const Input = styled.input`
  width: 800px;
  padding: 12px 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
  font-weight: 700;
`;

const EditorContainer = styled.div`
  border: 1px solid #ccc;
  min-height: 6em;
  width: 800px;
  cursor: text;
`;

const Button = styled.button`
  position: absolute;
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
  margin: 20px 0;
`;

const Content = styled.div`
  position: relative;
  border: 0.0625rem solid #d7e2eb;
  border-radius: 0.75rem;
  overflow: hidden;
  padding: 1.5rem;
  width: 50%;
  margin: 0 auto;
  margin-bottom: 4rem;
`;

function WriteFeed() {
  let editorState = EditorState.createEmpty();
  const [contents, setcontents] = useState(editorState);

  const onEditorStateChange = (editorState) => {
    setcontents(editorState);
  };
  const navigate = useNavigate();
  // const editorToHtml = (editorState) => {
  //   return draftToHtml(convertToRaw(editorState.getCurrentContent()));
  // };
  return (
    <Formik
      initialValues={{
        title: "",
        tag: "",
        contents: "",
      }}
      validationSchema={Yup.object().shape({
        title: Yup.string().required("제목은 필수 입력 항목입니다."),
        tag: Yup.string().required("태그는 필수 입력 항목입니다."),
        contents: Yup.string().required("내용은 필수 입력 항목입니다."),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          let dataToSumbit = {
            title: values.title,
            tag: values.tag,
            contents: values.contents.value,
          };
          Write(dataToSumbit).then((res) => {
            console.log(res);
          });
          navigate("/");
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
        // console.log(values);
        return (
          <div>
            <Container>
              <Form onSubmit={handleSubmit}>
                <InputContainer>
                  <Input
                    required
                    type="text"
                    id="title"
                    value={values.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="제목을 입력해주세요"
                    className={
                      errors.title && touched.title
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.title && touched.title && (
                    <div className="input-feedback">{errors.title}</div>
                  )}
                </InputContainer>
                <InputContainer>
                  <Input
                    required
                    type="text"
                    id="tag"
                    value={values.tag}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="태그를 입력해주세요"
                    className={
                      errors.tag && touched.tag
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.tag && touched.tag && (
                    <div className="input-feedback">{errors.tag}</div>
                  )}
                </InputContainer>
                <EditorContainer>
                  <Editor
                    editorState={contents}
                    toolbarClassName="toolbarClassName"
                    // toolbar={{
                    //   list: { inDropdown: true },
                    //   textAlign: { inDropdown: true },
                    //   link: { inDropdown: true },
                    //   history: { inDropdown: true },
                    // }}
                    locale="ko"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    // value={values.contents}
                    onEditorStateChange={onEditorStateChange}
                    editorStyle={{ "max-height": "200px", height: "200px" }}
                  />
                  <textarea
                    style={{ display: "none", overflowY: "scroll" }}
                    disabled
                    ref={(val) => (values.contents = val)}
                    value={draftToHtml(
                      convertToRaw(contents.getCurrentContent())
                    )}
                  />
                </EditorContainer>
                <Button
                  onClick={handleSubmit}
                  htmlType="submit"
                  className="form-button"
                  type="primary"
                  disabled={isSubmitting}
                >
                  업로드
                </Button>
              </Form>
            </Container>
            {/* <Content
              dangerouslySetInnerHTML={{ __html: editorToHtml(contents) }}
            /> */}
          </div>
        );
      }}
    </Formik>
  );
}

export default WriteFeed;
