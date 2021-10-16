import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

import Header from "./Header.js";
import LeftSide from "./LeftSide.js";
import RightSide from "./RightSide.js";
import axios from "./Axios.js";

function Homepage() {
  const [urls, setUrls] = useState([]);

  const fetchUrls = useCallback(async () => {
    const { data } = await axios.get("/urls");
    setUrls(data);
  }, [setUrls]);

  useEffect(() => fetchUrls(), [fetchUrls]);
  console.log(urls);

  return (
    <Mainbody>
      <Header />
      <Insidebody>
        <LeftSide addUrl={setUrls} />
        <RightSide urls={urls} setUrls={setUrls} />
      </Insidebody>
    </Mainbody>
  );
}

export default Homepage;

const Mainbody = styled.section``;
const Insidebody = styled.div`
  display: flex;
  flex-direction: row;
`;
