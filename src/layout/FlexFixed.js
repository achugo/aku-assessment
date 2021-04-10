import React from "react";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
`;

const FlexFixed = ({ children }) => {
  return <Flex>{children}</Flex>;
};
export default FlexFixed;
