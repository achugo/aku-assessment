import React from "react";
import styled from "styled-components";
import { AppFont } from "../../../config/appFont/fonts";

const Button = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  text-align: left;
  text-decoration: underline;
  font-family: ${AppFont.BOLD};
  display: block;
  margin-top: 2em;
  font-size: 18px;
  color: ${({ color }) => color};
  cursor: pointer;

  @media screen and (max-width: 768px) {
    text-align: center;
    margin: 1em auto;
  }

  &:hover {
    color: yellow;
    transition: 0.5s ease-in;
  }
`;

const MoreInfo = ({ children, color }) => {
  return <Button color={color}>{children}</Button>;
};

export default MoreInfo;
