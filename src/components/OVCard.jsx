import React from "react";
import styled from "styled-components";

import SelectLogo from "./utils/SelectLogo";

import inc from "../images/icon-up.svg";
import dec from "../images/icon-down.svg";
import { useSelector } from "react-redux";

const OVCard = ({ dataviews, datalikes, dvlogo, dllogo }) => {
  const theme = useSelector((state) => state.theme.value);
  return (
    <OVContainer themeColor={theme}>
      <OVHeader>
        <p className="page-views">
          {dataviews ? "Page Views" : datalikes ? "Likes" : ""}
        </p>
        {dvlogo ? (
          <SelectLogo name={dvlogo} />
        ) : dllogo ? (
          <SelectLogo name={dllogo} />
        ) : (
          ""
        )}
      </OVHeader>

      <OVBody themeColor={theme}>
        {dataviews ? (
          <>
            <p className="body-total">
              {dataviews.total >= 52000 ? "52k" : dataviews.total}
            </p>

            <div className="body-totals">
              {dataviews.percent < 0 ? (
                <>
                  <OVIncrementDecrement iod={dec} />
                  <p
                    className="body-iod"
                    style={{ color: "hsl(356, 69%, 56%)" }}
                  >
                    {dataviews.percent}%
                  </p>
                </>
              ) : (
                <>
                  <OVIncrementDecrement iod={inc} />
                  <p className="body-iod">{dataviews.percent}%</p>
                </>
              )}
            </div>
          </>
        ) : datalikes ? (
          <>
            <p className="body-total">{datalikes.total}</p>

            <div className="body-totals">
              {datalikes.percent < 0 ? (
                <>
                  <OVIncrementDecrement iod={dec} />
                  <p
                    className="body-iod"
                    style={{ color: "hsl(356, 69%, 56%)" }}
                  >
                    {datalikes.percent}%
                  </p>
                </>
              ) : (
                <>
                  <OVIncrementDecrement iod={inc} />
                  <p className="body-iod">{datalikes.percent}%</p>
                </>
              )}
            </div>
          </>
        ) : (
          ""
        )}
      </OVBody>
    </OVContainer>
  );
};

const OVContainer = styled.div`
  color: white;
  background-color: ${(props) => props.themeColor ?  'hsl(227, 47%, 96%)': 'hsl(228, 28%, 20%)'};
  border-radius: 0.5em;
  margin: 1.5em 0;

  cursor:pointer;

  &:hover{
    background-color: ${(props) => props.themeColor ?  '#dfe1e9': '#363d5e'};
  }

  @media(max-width: 425px){
    margin: 0.5em 0;
  }
`;

const OVHeader = styled.div`
  padding: 0.5em 1em 0 1em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .page-views {
    color: hsl(228, 34%, 66%);
    font-size: small;
    font-weight: 700;
  }
`;

const OVBody = styled.div`
  margin: 0 1em;
  padding: 0.5em 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .body-totals {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0;
  }
  .body-total {
    font-size: xx-large;
    font-weight: 700;
    margin: 0;
    color: ${(props) => props.themeColor ?  'black': 'white'};
  }
  .body-iod {
    font-size: medium;
    font-weight: 700;
    color: hsl(163, 72%, 41%);
    margin: 0;
  }
`;

const OVIncrementDecrement = styled.div`
  background-image: url(${(props) => props.iod});
  height: 0.5em;
  width: 0.5em;
  background-repeat: no-repeat;
  margin-right: 0.2em;
`;

export default OVCard;
