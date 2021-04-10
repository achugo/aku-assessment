import React from "react";
import styled from "styled-components";
import { AppColors } from "../../../config/appTheme/color";
import HeadingMedium from "../../atoms/headings/HeadingMedium";
import MoreInfo from "../../atoms/more/MoreInfo";
import TinyText from "../../atoms/tinyText/TinyText";
import parse from "html-react-parser";

const Wrapper = styled.div`
  position: relative;
  padding-top: ${({ padding }) => padding};
`;

const BreakDown = ({
  miniHeader,
  mediumHeader,
  tinytext,
  btntext,
  padding,
}) => {
  return (
    <Wrapper padding={padding}>
      <TinyText color={AppColors.primary} size={14}>
        {miniHeader}
      </TinyText>
      <HeadingMedium color={AppColors.primary}>
        {parse(mediumHeader)}
      </HeadingMedium>
      <TinyText color={AppColors.text} size={16}>
        {parse(tinytext)}
      </TinyText>
      <MoreInfo color={AppColors.blurgrey}>{btntext}</MoreInfo>
    </Wrapper>
  );
};
export default BreakDown;
