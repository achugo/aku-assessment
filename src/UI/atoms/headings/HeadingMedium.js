import React from "react";
import styled from "styled-components";
import { AppFont } from "../../../config/appFont/fonts";

const Heading = styled.h1`
  font-size: 2.8rem;
  color: ${({ color }) => color};
  font-family: ${AppFont.BOLD};
  line-height: 1.4;

  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 2.1rem;
    line-height: 1.2;
  }
`;

const HeadingMedium = ({ color, children, style }) => {
  return (
    <Heading color={color} style={style}>
      {children}
    </Heading>
  );
};

export default HeadingMedium;
