import React from "react";
import styled from "styled-components";

import up from "../images/icon-up.svg";
import down from "../images/icon-down.svg";
import ColorSelector from "./utils/ColorSelector";
import LogoSelector from "./utils/LogoSelector";
import { useSelector } from "react-redux";

const SocialNetwork = ({ data }) => {
  const theme = useSelector((state) => state.theme.value);
  return (
    <SNContainer themeColor={theme}>
      <ColorSelector socialName={data.socialName} />
      <SNHorizontalContainer>
        <LogoSelector sn={data.socialName} />
        {data.socialName === "youtube" ? (
          <p>{data.socialUser}</p>
        ) : (
          <p>@{data.socialUser}</p>
        )}
      </SNHorizontalContainer>

      <SNTotal themeColor={theme}>{data.socialNoFollowers >= 11000 ? '11k' : data.socialNoFollowers}</SNTotal>
      <SNFollowers>F O L L O W E R S</SNFollowers>

      <SNHorizontalContainer>
        {data.socialUpDownTo >= 1 ? (
          <>
            <UpOrDown uod={up}/>
            <UPOColor uodcolor='hsl(163, 72%, 41%)'>{data.socialUpDownTo} Today</UPOColor>
          </>
        ) : (
          <>
            <UpOrDown uod={down}/>
            <UPOColor uodcolor="hsl(356, 69%, 56%)">{data.socialUpDownTo} Today</UPOColor>
          </>
        )}
      </SNHorizontalContainer>
    </SNContainer>
  );
};

const SNContainer = styled.div`
  color: ${(props) => props.themeColor ?  'black': 'white'};
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.themeColor ?  'hsl(227, 47%, 96%)': 'hsl(228, 28%, 20%)'};
  align-items: center;
  border-radius: 0.5em;

  cursor: pointer;

  &:hover{
    background-color: ${(props) => props.themeColor ?  '#dfe1e9': '#363d5e'};
  }
`;

const SNHorizontalContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 1em 1em;
  padding: 0;
  font-size: smaller;
`;

const UpOrDown = styled.div`
  background-image: url(${props => props.uod});
  background-repeat: no-repeat;

  height: 0.55em;
  width: 0.5em;
  margin-right: 0.5em;
`;

const SNTotal = styled.h1`
  color: ${(props) => props.themeColor ?  'black': 'white'};
  margin: 0;
  padding: 0;
`;

const SNFollowers = styled.span`
  color: gray;
  font-size: x-small;
  margin-bottom: 1em;
`;
const UPOColor = styled.p`
  color: ${(props) => props.uodcolor};
  font-weight: 700;
  margin: 0;
  padding: 0;
`;

export default SocialNetwork;
