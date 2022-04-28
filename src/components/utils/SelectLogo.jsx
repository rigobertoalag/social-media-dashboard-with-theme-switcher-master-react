import React from "react";
import styled from "styled-components";

import facebook from "../../images/icon-facebook.svg";
import twitter from "../../images/icon-twitter.svg";
import instagram from "../../images/icon-instagram.svg";
import youtube from "../../images/icon-youtube.svg";

const SelectLogo = ({ name }) => {
  if ("facebook" === name) {
    return <OVLogo name={facebook} />;
  } else if ("twitter" === name) {
    return <OVLogo name={twitter} />;
  } else if ("instagram" === name) {
    return <OVLogo name={instagram} />;
  } else if ("youtube" === name) {
    return <OVLogo name={youtube} />;
  }
};

const OVLogo = styled.div`
  background-image: url(${(props) => props.name});
  background-repeat: no-repeat;
  height: 1.5em;
  width: 1.5em;
`;

export default SelectLogo;
