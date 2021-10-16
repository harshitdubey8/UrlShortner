import React from "react";
import styled from "styled-components";

function header() {
  return (
    <HeaderContainer>
      <Item>URL-Shortner - Tranzita Assignment - Harshit Dubey</Item>
    </HeaderContainer>
  );
}

export default header;

const HeaderContainer = styled.header`
  z-index: 99;
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  height: 60px;
  /* width: 60px; */
  justify-content: center;
  align-items: center;
  background: #330040;
  box-shadow: 2px 4px 8px 2px rgba(0, 0, 0, 0.4);
`;

const Item = styled.h1`
  color: #fff;
`;
