import React from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import axios from "./Axios.js";

function RightSide({ urls, setUrls }) {
  const deleteUrl = async (event, id) => {
    event.preventDefault();

    const { data } = await axios.delete(`/urls/${id}/delete`);
    setUrls((prevstate) => prevstate.filter((item) => item._id !== data._id));
  };
  return (
    <RightSection>
      <Heading>URLS</Heading>

      {urls.map((data) => (
        <UrlCard key={data._id}>
          <UrlTextContainer>
            <UrlText>Default URL: {data.url}</UrlText>
            <UrlText>
              Shortend URL: https://localhost:3000/{data.shortUrl}
            </UrlText>
          </UrlTextContainer>
          <StyledButton onClick={(e) => deleteUrl(e, data._id)}>
            Delete
          </StyledButton>
        </UrlCard>
      ))}
    </RightSection>
  );
}

export default RightSide;

const RightSection = styled.section`
  display: flex;
  height: calc(100vh - 60px);
  flex-direction: column;
  align-items: center;
  /* padding: 70px; */
  background-color: #a73c5a;
  width: 50%;
  overflow-x: hidden;
  overflow-y: scroll;
`;

const Heading = styled.h1`
  color: #fff;
`;

const UrlCard = styled.div`
  display: flex;
  background-color: #fff;
  height: 100px;
  width: 70%;
  border-radius: px;
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

const UrlText = styled.h3`
  padding: 5px;
`;

const UrlTextContainer = styled.div``;

const StyledButton = styled(Button)`
  background: #ff7954 !important;
  color: white !important;
  padding: 15px 20px !important;
  box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.5) !important;
  transition: 0.2s all ease-in-out !important;
  border-radius: 25px;
`;
