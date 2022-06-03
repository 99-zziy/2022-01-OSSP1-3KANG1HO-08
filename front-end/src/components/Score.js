import React, { useState } from "react";
import styled from "styled-components";
import { FaThumbsDown } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { PrimaryColor } from "../assets/color/color";

const ReviewBox = styled.div`
  padding: 30px;
  color: #999;
  font-size: 20px;
  font-weight: bold;
`;

const FaThumbsDownIcon = styled(FaThumbsDown)`
  cursor: pointer;
  color: indianred;
  width: 30px;
  height: 30px;
`;

const FaThumbsUpIcon = styled(FaThumbsUp)`
  cursor: pointer;
  color: cornflowerblue;
  width: 30px;
  height: 30px;
`;

const ReviewTextBox = styled.div`
  position: relative;
  text-align: center;
  padding-bottom: 50px;
`;

const ThumbsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

const ReviewThumbBox = styled.div`
  display: flex;
  justify-content: space-around;
`;

const HiddenText = styled.p`
  color: #333;
  font-size: 15px;
`;

function Score({ onClose }) {
  const onClickRating = (rating) => {
    onClose();
  };

  return (
    <ReviewBox>
      <ReviewTextBox>
        <p>추천받은 태그를 평가해주세요!</p>
      </ReviewTextBox>
      <ReviewThumbBox>
        <ThumbsContainer onClick={() => onClickRating(0)}>
          <FaThumbsDownIcon></FaThumbsDownIcon>
          <HiddenText>별로에요</HiddenText>
        </ThumbsContainer>
        <ThumbsContainer onClick={() => onClickRating(1)}>
          <FaThumbsUpIcon></FaThumbsUpIcon>
          <HiddenText>좋아요 !</HiddenText>
        </ThumbsContainer>
      </ReviewThumbBox>
    </ReviewBox>
  );
}

export default Score;
