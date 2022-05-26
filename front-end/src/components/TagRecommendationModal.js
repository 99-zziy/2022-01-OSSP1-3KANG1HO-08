import React from "react";
import styled from "styled-components";
import Modal from "./Modal";
import FeedPreview from "./FeedPreview";
import { PrimaryColor } from "../assets/color/color";

const ModalHeader = styled.div`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

const Tag = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin-top: 30px;
  color: ${PrimaryColor};
`;

const FeedContainer = styled.div`
  display: flex;
`;

function TagRecommendationModal() {
  return (
    <Modal visible={true}>
      <ModalHeader>{"작성해주신 태그와 관련된 추천 태그입니다!"}</ModalHeader>
      {/* 더미 데이터로 일단 넣어두기*/}
      <Tag>{"# 포인터"}</Tag>
      <FeedContainer>
        <FeedPreview
          id={1}
          title={"포인터 글1"}
          content={"포인터 글입니다."}
          date={"2021.05.25"}
          likeCount={8}
          isModal={true}
        ></FeedPreview>
      </FeedContainer>
      <Tag>{"# 포인터 배열"}</Tag>
      <FeedContainer>
        <FeedPreview
          id={1}
          title={"포인터배열 글1"}
          content={"포인터배열 글입니다."}
          date={"2021.05.25"}
          likeCount={8}
          isModal={true}
        ></FeedPreview>
        <FeedPreview
          id={1}
          title={"포인터배열 글2"}
          content={"포인터배열 글입니다."}
          date={"2021.05.25"}
          likeCount={8}
          isModal={true}
        ></FeedPreview>
      </FeedContainer>
      <Tag>{"# 구조체"}</Tag>
      <FeedContainer>
        <FeedPreview
          id={1}
          title={"구조체 글1"}
          content={"구조체 글입니다."}
          date={"2021.05.25"}
          likeCount={8}
          isModal={true}
        ></FeedPreview>
      </FeedContainer>
    </Modal>
  );
}

export default TagRecommendationModal;
