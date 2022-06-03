import React, { useState } from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { PrimaryColor } from "../assets/color/color";

//style-component 사용
const textList = [
  "별로에요",
  "그저 그래요",
  "보통이에요",
  "좋아요",
  "최고예요",
];

const ReviewBox = styled.div`
  padding: 30px;
  color: #999;
  font-size: 20px;
  font-weight: bold;
`;

const RatingStar = styled(AiFillStar)`
  cursor: pointer;
`;

const ReviewTextBox = styled.div`
  position: relative;
  text-align: center;
  padding-bottom: 50px;
`;

const StarContainer = styled.div`
  text-align: center;
  border: none;
  background-color: white;
`;

const HiddenText = styled.p`
  position: absolute;
  top: 50px;
  left: 50%;
  width: 130px;
  height: 30px;
  padding-top: 7px;
  transform: translate(-50%, -50%);
  color: white;
  background-color: ${PrimaryColor};
  border-radius: 4px;
  font-size: 16px;

  ${({ show }) => (show ? `display:block` : `display: none`)}
`;

function Score({ onClose }) {
  const [hovered, setHovered] = useState(null);

  const onClickRating = (rating) => {
    onClose();
  };

  return (
    <ReviewBox>
      <ReviewTextBox>
        <p>추천받은 태그를 평가해주세요!</p>
        {[1, 2, 3, 4, 5].map((num) => (
          <HiddenText key={num} show={hovered === num}>
            {textList[num - 1]}
          </HiddenText>
        ))}
      </ReviewTextBox>
      <StarContainer>
        {[1, 2, 3, 4, 5].map((el) => (
          <RatingStar
            size={35}
            key={`rating_${el}`}
            color={el <= hovered ? `orange` : "#ddd"}
            onMouseEnter={() => setHovered(el)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => onClickRating(el)}
          />
        ))}
      </StarContainer>
    </ReviewBox>
  );
}

export default Score;
