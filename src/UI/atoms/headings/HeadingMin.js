import React from "react";
import styled from "styled-components";

const Heading = styled.h1`
  font-size: 1rem;
  color: ${({ color }) => color};
`;

const HeadingMin = ({ color, children }) => {
  return <Heading color={color}>{children}</Heading>;
};

export default HeadingMin;
