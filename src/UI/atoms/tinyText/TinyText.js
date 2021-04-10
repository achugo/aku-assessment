import React from "react";
import styled from "styled-components";
import { AppFont } from "../../../config/appFont/fonts";

const Span = styled.span`
  font-size: ${({ size }) => size};
  color: ${({ color }) => color};
  font-family: ${AppFont.REGULAR};

  @media screen and (max-width: 768px) {
    text-align: center;
    display: block;
  }
`;

const TinyText = ({ size, children, color }) => {
  return (
    <Span color={color} size={size}>
      {children}
    </Span>
  );
};

export default TinyText;
