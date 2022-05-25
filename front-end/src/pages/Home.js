import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getFeedList } from "../api/feedApi";
import FeedPreview from "../components/FeedPreview";
import moment from "moment";

const FeedPreviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 80px;
  margin-left: 30px;
  margin-right: 30px;
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
          const date = moment(feed.createdAt).format("YYYY.MM.DD");
          return (
            <FeedPreview
              key={index}
              id={feed._id}
              title={feed.title}
              content={feed.contents}
              date={date}
              likeCount={6}
            ></FeedPreview>
          );
        })}
    </FeedPreviewContainer>
  );
}

export default Home;
