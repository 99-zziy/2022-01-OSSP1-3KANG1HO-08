import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import FeedPreview from "./FeedPreview";
import { PrimaryColor } from "../assets/color/color";
import CloseIcon from "../assets/icon/close.png";
import TagEvaluationModal from "./TagEvaluationModal";
import { useNavigate } from "react-router";
import { getFeedCorrespondTotag } from "../api/feedApi";
import moment from "moment";

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const CloseButton = styled.img`
  width: 20px;
  cursor: pointer;
`;

const ModalText = styled.p`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

function TagRecommendationModal() {
  const [visible, setVisible] = useState(true);
  const [tagList, setTagList] = useState("if,배열,for");
  const [feedList, setFeedList] = useState(null);
  const [evaluationVisibile, setEvaluationVisibile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getFeedCorrespondTotag(tagList).then((res) => {
      console.log(res);
      setFeedList(res.data);
    });
  }, []);

  return (
    <Modal visible={visible} width={"800px"}>
      <ModalHeader>
        <ModalText>{"작성해주신 태그와 관련된 추천 태그입니다!"}</ModalText>
        <CloseButton
          src={CloseIcon}
          onClick={() => {
            setEvaluationVisibile(true);
          }}
        ></CloseButton>
      </ModalHeader>
      {/* 더미 데이터로 일단 넣어두기*/}
      {feedList &&
        feedList.map((feed) => {
          console.log(feed);
          return (
            <>
              <Tag>{`#${feed.tagName}`}</Tag>
              <FeedContainer>
                {feed.feed &&
                  feed.feed.map((feedData) => {
                    // console.log(feedList[0]);
                    const date = moment(feedData.createdAt).format(
                      "YYYY.MM.DD"
                    );
                    return (
                      <FeedPreview
                        id={feedData._id}
                        title={feedData.title}
                        content={feedData.contents}
                        date={date}
                        likeCount={8}
                        isModal={true}
                      ></FeedPreview>
                    );
                  })}
              </FeedContainer>
            </>
          );
        })}
      <TagEvaluationModal
        visible={evaluationVisibile}
        onModalClose={() => {
          setEvaluationVisibile(false);
          setVisible(false);
          navigate("/");
        }}
      />
    </Modal>
  );
}

export default TagRecommendationModal;
