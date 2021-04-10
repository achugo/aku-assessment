import React from "react";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    display: block;
    text-align: center;
  }
`;

const FlexWrapper = ({ children }) => {
  return <Flex>{children}</Flex>;
};
export default FlexWrapper;
