import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PrimaryColor } from "../../assets/color/color";
import { useNavigate } from "react-router";
import { getFeed } from "../../api/feedApi";
import { useParams } from "react-router-dom";

const FeedMain = styled.div`
  display: flex;
  width: 60vw;
  margin: auto;
  margin-top: 100px;
  flex-direction: column;
`;

const FeedTitle = styled.div`
  font-weight: bold;
  font-size: 32px;
`;

const FeedTag = styled.div`
  font-weight: bold;
  font-size: 24px;
  margin-top: 10px;
`;

const FeedContentsContainer = styled.div`
  background-color: #f8f9fa;
  padding: 16px;
  margin-top: 10px;
  min-height: 300px;
`;

const FeedContents = styled.div`
  font-size: 16px;
`;

function Feed() {
  const [feed, setFeed] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getFeed(id).then((res) => {
      setFeed(res.feeds);
    });
  }, []);
  const navigate = useNavigate();

  return (
    <FeedMain>
      <FeedTitle>{feed.title}</FeedTitle>
      {feed.tag.map((tag) => {
        return <FeedTag>{`#${feed.tag}`}</FeedTag>;
      })}
      <FeedContentsContainer>
        <FeedContents>{feed.contents}</FeedContents>
      </FeedContentsContainer>
    </FeedMain>
  );
}

export default Feed;
