import React from "react";
import styled from "styled-components";

import SocialNetwork from "./SocialNetwork";
import socialData from "../socialData";

const Social = () => {
  return (
    <SocialContainer>
      {socialData.map((sd, i) => (
        <SocialNetwork data={sd} key={i} />
      ))}
    </SocialContainer>
  );
};

const SocialContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 3em;

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
    width: 85%;
    position: relative;
    margin: auto;
    gap: 1em;
  }
`;

export default Social;
