import React from "react";
import styled from "styled-components";
import { AppFont } from "../../../config/appFont/fonts";

const Span = styled.span`
  color: ${({ color }) => color};
  font-family: ${AppFont.ITALIC};
  font-size: ${({ size }) => size};
  line-height: 1.8;
`;

const ItalicText = ({ size, children, color }) => {
  return (
    <Span color={color} size={size}>
      {children}
    </Span>
  );
};

export default ItalicText;
