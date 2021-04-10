import React from "react";
import styled from "styled-components";

const FlexLayout = styled.div`
  flex: ${({ flex }) => flex};
`;

const FlextItem = ({ children, flex, style }) => {
  return (
    <FlexLayout style={style} flex={flex}>
      {children}
    </FlexLayout>
  );
};

export default FlextItem;
