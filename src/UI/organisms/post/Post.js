import React from "react";
import styled from "styled-components";
import { AppColors } from "../../../config/appTheme/color";
import TopicHeading from "../../atoms/headings/TopicHeading";
import MoreInfo from "../../atoms/more/MoreInfo";
import TinyText from "../../atoms/tinyText/TinyText";

const Wrapper = styled.div`
  position: relative;
  background-color: transparent;
  padding: 3.5em 2em;

  &:hover {
    box-shadow: 50px 50px 100px #00000025;
    border-radius: 4px;
    background-color: ${AppColors.white};
    transition: 0.5s ease;
    border-radius: 4px;
  }
`;

const Post = ({ heading, minicaption }) => {
  return (
    <Wrapper>
      <TopicHeading color={AppColors.secondaryHeading}>{heading}</TopicHeading>
      <TinyText color={AppColors.text}>{minicaption}</TinyText>
      <MoreInfo> More know About us</MoreInfo>
    </Wrapper>
  );
};

export default Post;
