import React from "react";
import styled from "styled-components";

const Heading = styled.h1`
  font-size: 4rem;
  color: ${({ color }) => color};

  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 2.9rem;
  }
`;

const HeadingMax = ({ color, children }) => {
  return <Heading color={color}>{children}</Heading>;
};

export default HeadingMax;
