import React from "react";
import styled from "styled-components";

import facebook from "../../images/icon-facebook.svg";
import twitter from "../../images/icon-twitter.svg";
import instagram from "../../images/icon-instagram.svg";
import youtube from "../../images/icon-youtube.svg";

const LogoSelector = ({ sn }) => {
  if (sn === "facebook") {
    return <Logo logo={facebook} />;
  } else if (sn === "twitter") {
    return <Logo logo={twitter} />;
  } else if (sn === "instagram") {
    return <Logo logo={instagram} />;
  } else if (sn === "youtube") {
    return <Logo logo={youtube} />;
  }
};

const Logo = styled.div`
  background-image: url(${(props) => props.logo});
  background-repeat: no-repeat;
  height: 1.5em;
  width: 1.5em;
  margin-right: 0.5em;
`;

export default LogoSelector;
