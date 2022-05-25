import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getFeedList } from "../api/feedApi";
import FeedPreview from "../components/FeedPreview";

const FeedPreviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 80px;
  justify-content: center;
`;

function Home() {
  const [feedList, setFeedList] = useState(null);

  useEffect(() => {
    getFeedList().then((res) => {
      console.log(res.feeds);
      setFeedList(res.feeds);
    });
  }, []);

  return (
    <FeedPreviewContainer>
      {feedList &&
        feedList.map((feed, index) => {
          return (
            <FeedPreview
              key={index}
              title={feed.title}
              content={feed.contents}
              date={feed.createdAt}
              likeCount={6}
            ></FeedPreview>
          );
        })}
    </FeedPreviewContainer>
  );
}

export default Home;
