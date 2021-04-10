import React from "react";
import styled from "styled-components";
import { AppFont } from "../../../config/appFont/fonts";

const Heading = styled.h1`
  font-size: 1.5rem;
  color: ${({ color }) => color};
  font-family: ${AppFont.MEDIUM};
  line-height: 1.4;
`;

const TopicHeading = ({ color, children, style }) => {
  return (
    <Heading color={color} style={style}>
      {children}
    </Heading>
  );
};

export default TopicHeading;
