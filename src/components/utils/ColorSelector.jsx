import React from "react";
import styled from "styled-components";

const ColorSelector = ({ socialName }) => {
  if (socialName === "facebook") {
    return <SNTopColor color={"hsl(208, 92%, 53%)"} />;
  } else if (socialName === "twitter") {
    return <SNTopColor color={"hsl(203, 89%, 53%)"} />;
  } else if (socialName === "instagram") {
    return (
      <SNTopColor
        color={
          "linear-gradient(0.25turn, hsl(37, 97%, 70%), hsl(329, 70%, 58%));"
        }
      />
    );
  } else if (socialName === "youtube") {
    return <SNTopColor color={"hsl(348, 97%, 39%)"} />;
  }
};

const SNTopColor = styled.div`
  width: 100%;
  height: 0.3em;
  background: ${(props) => props.color};
  border-radius: 1em;
`;

export default ColorSelector;
