import React from "react";
import styled from "styled-components";
import { AppFont } from "../../../config/appFont/fonts";
import { AppColors } from "../../../config/appTheme/color";
import FlextItem from "../../../layout/FlexItem";
import FlexWrapper from "../../../layout/FlexWrap";
import FooterTopBold from "../../atoms/headings/FooterTopBold";
import TinyText from "../../atoms/tinyText/TinyText";

const Wrapper = styled.div`
  position: relative;
  padding: 3em 0;
  border-bottom: 1px solid ${AppColors.footerborder};
`;

const FooterLevelOne = () => {
  return (
    <Wrapper>
      <FlexWrapper>
        <FlextItem flex={1}>
          <TinyText color={AppColors.footertext} size={16}>
            Phone
          </TinyText>
          <FooterTopBold color={AppColors.white}>+32 50 31 28 32</FooterTopBold>
        </FlextItem>
        <FlextItem flex={3}>
          <TinyText color={AppColors.footertext} size={16}>
            Address
          </TinyText>
          <FooterTopBold color={AppColors.white}>
            491 Merlin Crest Suite 963
          </FooterTopBold>
        </FlextItem>
      </FlexWrapper>
    </Wrapper>
  );
};

export default FooterLevelOne;
