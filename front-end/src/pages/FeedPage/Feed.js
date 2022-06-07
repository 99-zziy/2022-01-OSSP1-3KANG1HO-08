import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PrimaryColor } from "../../assets/color/color";
import draftToHtml from "draftjs-to-html";
import { useNavigate } from "react-router";
import { getFeed } from "../../api/feedApi";
import { useParams } from "react-router-dom";
import moment from "moment";
import { convertToRaw } from "draft-js";
import { AiOutlineArrowLeft } from "react-icons/ai";

const FeedMain = styled.div`
  display: flex;
  width: 60vw;
  margin: auto;
  margin-top: ${(props) => (props.isModal ? "20px" : "100px")};
  flex-direction: column;
`;

const FeedTitle = styled.div`
  font-weight: bold;
  font-size: 48px;
`;

const FeedDate = styled.div`
  font-weight: bold;
  font-size: 14px;
  margin-top: 20px;
  color: gray;
`;

const FeedTag = styled.span`
  font-weight: bold;
  font-size: 16px;
  margin-top: 10px;
  margin-right: 10px;
  width: fit-content;
  color: ${PrimaryColor};
  background: #f5f5f5;
  padding: 10px;
  border-radius: 20px;
`;

const FeedTagContainer = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

const FeedContentsContainer = styled.div`
  padding: 16px;
  margin-top: 10px;
  min-height: 300px;
`;

const FeedContents = styled.div`
  font-size: 16px;
`;

const ArrowLeftIcon = styled(AiOutlineArrowLeft)`
  cursor: pointer;
  width: 24px;
  height: 24px;
  margin-bottom: 60px;
`;

function Feed({ isModal, feedId, onClickBack }) {
  const [feed, setFeed] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (isModal)
      getFeed(feedId).then((res) => {
        setFeed(res.feeds);
        setUserEmail(res.userEmail);
        console.log(feed.tag);
      });
    else
      getFeed(id).then((res) => {
        setFeed(res.feeds);
        setUserEmail(res.userEmail);
        console.log(feed.tag);
      });
  }, []);

  return (
    feed && (
      <FeedMain isModal={isModal}>
        {isModal ? <ArrowLeftIcon onClick={onClickBack}></ArrowLeftIcon> : null}
        <FeedTitle>{feed.title}</FeedTitle>
        <FeedDate>
          {`${moment(feed.createdAt).format("YYYY.MM.DD")} / ${userEmail}`}
        </FeedDate>
        <FeedTagContainer>
          {feed.tag.map((tag, inex) => {
            return <FeedTag key={inex}>{`# ${tag}`}</FeedTag>;
          })}
        </FeedTagContainer>
        <FeedContentsContainer>
          <FeedContents
            dangerouslySetInnerHTML={{ __html: feed.contents }}
          ></FeedContents>
        </FeedContentsContainer>
      </FeedMain>
    )
  );
}

export default Feed;
