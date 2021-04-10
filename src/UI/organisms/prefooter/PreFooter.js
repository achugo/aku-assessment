import React from "react";
import styled from "styled-components";
import { AppColors } from "../../../config/appTheme/color";
import HeadingMax from "../../atoms/headings/HeadingMax";
import MoreInfo from "../../atoms/more/MoreInfo";

const Wrapper = styled.div`
  position: relative;
  background-color: ${AppColors.nearwhite};
  padding-top: 1em;
  z-index: 2;
  padding-bottom: 1em;
`;

const PreFooter = () => {
  return (
    <Wrapper className="right-margin left-padding">
      <HeadingMax color={AppColors.primary}>
        Let’s make something <br /> amazing together.
      </HeadingMax>
      <MoreInfo> LET'S GET STARTED</MoreInfo>
    </Wrapper>
  );
};

export default PreFooter;
