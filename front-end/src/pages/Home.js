import React from "react";
import styled from "styled-components";
import FeedPreview from "../components/FeedPreview";

const FeedPreviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 80px;
  justify-content: center;
`;

function Home() {
  return (
    <FeedPreviewContainer>
      <FeedPreview></FeedPreview>
      <FeedPreview></FeedPreview>
      <FeedPreview></FeedPreview>
      <FeedPreview></FeedPreview>
      <FeedPreview></FeedPreview>
      <FeedPreview></FeedPreview>
    </FeedPreviewContainer>
  );
}

export default Home;
