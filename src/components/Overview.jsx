import React from "react";
import styled from "styled-components";

import OVCard from "./OVCard";

import socialData from "../socialData";

const Overview = () => {
  return (
    <OVContainer>
      {socialData.map((sd, i) => (
        <div key={i}>
          <OVCard dataviews={sd.extraData.views} dvlogo={sd.socialName} />
          <OVCard datalikes={sd.extraData.likes} dllogo={sd.socialName} />
        </div>
      ))}
    </OVContainer>
  );
};

const OVContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 3em;
  margin-top: 0.5em;

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
    width: 85%;
    position: relative;
    margin: auto;
    gap: 0.1em;
    margin-top: 0;
  }
`;

export default Overview;
