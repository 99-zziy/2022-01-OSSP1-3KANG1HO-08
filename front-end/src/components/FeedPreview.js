import React from "react";
import styled from "styled-components";
import { PrimaryColor } from "../assets/color/color";
import { useNavigate } from "react-router";

const FeedPreviewCard = styled.div`
  width: 20rem;
  height: 18rem;
  background: #f8f9fa;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 8%) 0px 4px 16px 0px;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  margin: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
`;

const FeedPreviewMain = styled.div``;

const TextContainer = styled.div`
  padding: 1rem;
`;

const Title = styled.div`
  font-size: 1rem;
  margin: 0px 0px 0.25rem;
  line-height: 1.5;
  word-break: break-word;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-weight: 700;
`;

const Content = styled.div`
  margin: 0px 0px 1.5rem;
  word-break: break-word;
  overflow-wrap: break-word;
  font-size: 0.875rem;
  line-height: 1.5;
  height: 8rem;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #495057;
`;

const Date = styled.div`
  font-size: 0.75rem;
  line-height: 1.5;
  color: #868e96;
`;

const FeedPreviewFooter = styled.div``;

const Like = styled.div`
  font-size: 0.9rem;
  float: right;
  margin: 1rem;
  color: ${PrimaryColor};
`;

function FeedPreview({ id, title, content, date, likeCount }) {
  const navigate = useNavigate();

  const onFeedClick = () => {
    navigate(`/feed/${id}`);
  };

  // api 통신 코드 추가하면 실제 데이터 넣을 것, 지금은 더미 데이터
  return (
    <FeedPreviewCard onClick={onFeedClick}>
      <FeedPreviewMain>
        <TextContainer>
          <Title>{title}</Title>
          <Content>{content}</Content>
          <Date>{date}</Date>
        </TextContainer>
      </FeedPreviewMain>
      <FeedPreviewFooter>
        <Like>{`♥ ${likeCount}`}</Like>
      </FeedPreviewFooter>
    </FeedPreviewCard>
  );
}

export default FeedPreview;
