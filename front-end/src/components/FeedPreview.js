import React from "react";
import styled from "styled-components";
import dummyImgae from "../assets/img/dummy.png";

const FeedPreviewCard = styled.div`
  width: 20rem;
  height: 22rem;
  background: #f8f9fa;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 8%) 0px 4px 16px 0px;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  margin: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FeedPreviewMain = styled.div``;

const Image = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

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
  height: 3.9375rem;
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
  font-size: 0.8rem;
  float: right;
  margin: 1rem;
`;

function FeedPreview() {
  // api 통신 코드 추가하면 실제 데이터 넣을 것, 지금은 더미 데이터
  return (
    <FeedPreviewCard>
      <FeedPreviewMain>
        <ImageContainer>
          <Image src={dummyImgae}></Image>
        </ImageContainer>
        <TextContainer>
          <Title>{"SSR CSR 차이점"}</Title>
          <Content>
            {
              "새로운 페이지를 요청 할때 마다 전체 페이지가 다시 렌더링 된다. 화면에서 바뀌지 않아도 되는 부분도 계속해서 다시 렌더링되는 단점이 있기 때문에 곧 서버 부하 등의 문제를 일으킬 수 있다.또한 전체가 다시 렌더링 될때 화면의 깜빡이게 되므로 사용자에게 불편함을 줄 수 있다."
            }
          </Content>
          <Date>{"3일전"}</Date>
        </TextContainer>
      </FeedPreviewMain>
      <FeedPreviewFooter>
        <Like>{"♥ 35"}</Like>
      </FeedPreviewFooter>
    </FeedPreviewCard>
  );
}

export default FeedPreview;
