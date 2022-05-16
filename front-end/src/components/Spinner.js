import React from "react";
import styled from "styled-components";

const Loading = styled.div`
  width: 50px;
  height: 50px;
  border: 10px solid #f3f3f3; /* Light grey */
  border-top: 10px solid #383636; /* Blue */
  border-radius: 50%;
  animation: spinner 1.5s linear infinite;
`;

const LoadingContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  height: 350px;
`;

export default function Spinner() {
  return (
    <LoadingContainer>
      <Loading></Loading>
    </LoadingContainer>
  );
}
