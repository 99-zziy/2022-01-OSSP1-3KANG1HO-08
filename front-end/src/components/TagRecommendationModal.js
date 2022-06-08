import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import FeedPreview from "./FeedPreview";
import Feed from "../pages/FeedPage/Feed";
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

const EmptyFeedText = styled.p`
  font-size: 14px;
  text-align: center;
  color: gray;
`;

function TagRecommendationModal({ recommendTagList }) {
  const [visible, setVisible] = useState(true);
  const [feedList, setFeedList] = useState(null);
  const [feedId, setFeedId] = useState(null);
  const [isFeedClick, setIsFeedClick] = useState(false);
  const [evaluationVisibile, setEvaluationVisibile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(recommendTagList);
    getFeedCorrespondTotag(recommendTagList).then((res) => {
      setFeedList(res.data);
    });
  }, []);

  useEffect(() => {
    console.log("isFeedClick");
  }, [isFeedClick]);

  const onModalFeedClick = (id) => {
    console.log("onModalFeedClick");
    setFeedId(id);
    setIsFeedClick(true);
  };

  const TagRecommend = () => {
    return (
      <>
        <ModalHeader>
          <ModalText>{"작성해주신 태그와 관련된 추천 태그입니다!"}</ModalText>
          <CloseButton
            src={CloseIcon}
            onClick={() => {
              setEvaluationVisibile(true);
            }}
          ></CloseButton>
        </ModalHeader>
        {feedList &&
          feedList.map((feed) => {
            console.log(feed.feed.length);
            return (
              <>
                <Tag>{`#${feed.tagName}`}</Tag>
                <FeedContainer>
                  {feed.feed.length === 0 ? (
                    <EmptyFeedText>
                      {"해당 태그와 관련된 피드가 없습니다."}
                    </EmptyFeedText>
                  ) : (
                    feed.feed.splice(0, 3).map((feedData) => {
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
                          onModalFeedClick={() =>
                            onModalFeedClick(feedData._id)
                          }
                        ></FeedPreview>
                      );
                    })
                  )}
                </FeedContainer>
              </>
            );
          })}
      </>
    );
  };

  const FeedView = () => {
    return (
      <Feed
        isModal={true}
        feedId={feedId}
        onClickBack={() => setIsFeedClick(false)}
      ></Feed>
    );
  };

  return (
    <Modal visible={visible} width={"800px"}>
      {isFeedClick ? FeedView() : TagRecommend()}
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
