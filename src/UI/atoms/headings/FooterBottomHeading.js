import React from "react";
import styled from "styled-components";
import { AppFont } from "../../../config/appFont/fonts";

const Heading = styled.h1`
  font-size: 1rem;
  color: ${({ color }) => color};
  font-family: ${AppFont.SEMIBOLD};
  margin-bottom: 2em;
`;

const FooterBottomHeading = ({ color, children }) => {
  return <Heading color={color}>{children}</Heading>;
};

export default FooterBottomHeading;
