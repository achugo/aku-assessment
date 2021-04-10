import React from "react";
import styled from "styled-components";
import { AppFont } from "../../../config/appFont/fonts";
import { AppColors } from "../../../config/appTheme/color";
import FlextItem from "../../../layout/FlexItem";
import FlexWrapper from "../../../layout/FlexWrap";
import FooterBottomHeading from "../../atoms/headings/FooterBottomHeading";
import FooterTopBold from "../../atoms/headings/FooterTopBold";
import TinyText from "../../atoms/tinyText/TinyText";

const Wrapper = styled.div`
  position: relative;
  padding: 3em 0;
  border-bottom: 1px solid ${AppColors.footerborder};

  span {
    display: block;
    line-height: 2;
  }

  .adjust {
    @media screen and (min-width: 768px) {
      border-left: 1px solid ${AppColors.footerborder};
      padding-left: 4em;
    }
  }
`;

const FooterLevelTwo = () => {
  return (
    <Wrapper>
      <FlexWrapper>
        <FlextItem flex={4}>
          <FooterBottomHeading color={AppColors.white}>
            SERVICES
          </FooterBottomHeading>
          <TinyText color={AppColors.footertext} size={16}>
            Strategy Design
          </TinyText>
          <TinyText color={AppColors.footertext} size={16}>
            Product Design
          </TinyText>
          <TinyText color={AppColors.footertext} size={16}>
            Content Strategy
          </TinyText>
          <TinyText color={AppColors.footertext} size={16}>
            Brand Strategy Development
          </TinyText>
        </FlextItem>

        <FlextItem flex={4}>
          <FooterBottomHeading color={AppColors.white}>
            HELP AND ADVICE
          </FooterBottomHeading>
          <TinyText color={AppColors.footertext} size={16}>
            How it works
          </TinyText>
          <TinyText color={AppColors.footertext} size={16}>
            Contact Support
          </TinyText>
          <TinyText color={AppColors.footertext} size={16}>
            Privacy Policy
          </TinyText>
          <TinyText color={AppColors.footertext} size={16}>
            FAQ
          </TinyText>
        </FlextItem>
        <FlextItem flex={4}>
          <FooterBottomHeading color={AppColors.white}>
            COMPANY
          </FooterBottomHeading>
          <TinyText color={AppColors.footertext} size={16}>
            About
          </TinyText>
          <TinyText color={AppColors.footertext} size={16}>
            Blog
          </TinyText>
          <TinyText color={AppColors.footertext} size={16}>
            Contact
          </TinyText>
          <TinyText color={AppColors.footertext} size={16}>
            Jobs
          </TinyText>
        </FlextItem>
        <FlextItem flex={5}>
          <div className="adjust">
            <FooterBottomHeading color={AppColors.white}>
              GET IN TOUCH
            </FooterBottomHeading>
            <TinyText color={AppColors.footertext} size={16}>
              Feel free to get in touch with us <br /> vai email
            </TinyText>
            <FooterTopBold
              style={{ fontSize: "1.3rem" }}
              color={AppColors.white}
            >
              info.webovio@gmail.com
            </FooterTopBold>
          </div>
        </FlextItem>
      </FlexWrapper>
    </Wrapper>
  );
};

export default FooterLevelTwo;
