import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import axios from "./Axios.js";

function LeftSide({ addUrl }) {
  const [url, setUrl] = useState("");
  const shortendUrl = async (event) => {
    event.preventDefault();

    if (!url.trim()) return alert("Url can't be empty");

    const { data } = await axios.post("/urls/create", { url });

    addUrl((prevState) => [data, ...prevState]);

    setUrl("");
  };
  return (
    <LeftContainer>
      <FormContainer>
        <UrlInput
          required
          type="text"
          placeholder="Enter URL to generte short URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <StyledButton onClick={shortendUrl}>Upload</StyledButton>
      </FormContainer>
    </LeftContainer>
  );
}

export default LeftSide;

const LeftContainer = styled.section`
  display: flex;
  height: calc(100vh - 60px);
  flex-direction: column;
  align-items: center;
  /* padding: 70px; */
  background-color: #391954;
  width: 50%;
  justify-content: center;
`;

const FormContainer = styled.form`
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
`;

const UrlInput = styled.input`
  /* color: #fff; */
  font-size: 1.3rem;
  outline-width: 0;
  border: none;
  background-color: #fff;
  border-bottom: 3px solid #fff;
  width: 500px;
  height: 50px;
  padding: 0 10px;
`;

const StyledButton = styled(Button)`
  background: #ff7954 !important;
  color: white !important;
  padding: 15px 20px !important;
  box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.5) !important;
  transition: 0.2s all ease-in-out !important;
`;
