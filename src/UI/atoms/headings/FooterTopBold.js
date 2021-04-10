import React from "react";
import styled from "styled-components";
import { AppFont } from "../../../config/appFont/fonts";

const Heading = styled.h1`
  font-size: 1rem;
  color: ${({ color }) => color};
  font-family: ${AppFont.BOLD};
`;

const FooterTopBold = ({ color, children, style }) => {
  return (
    <Heading style={style} color={color}>
      {children}
    </Heading>
  );
};

export default FooterTopBold;
