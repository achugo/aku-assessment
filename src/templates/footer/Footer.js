import React from "react";
import styled from "styled-components";
import { AppColors } from "../../config/appTheme/color";
import FooterLevelOne from "../../UI/molecules/footerLevelOne/FooterLevelOne";
import FooterLevelThree from "../../UI/molecules/footerLevelThree/FooterLevelThree";
import FooterLevelTwo from "../../UI/molecules/footerLevelTwo/FooterLevelTwo";
import FooterTop from "../../UI/molecules/footerTop/FooterTop";

const Wrapper = styled.div`
  position: relative;
`;

const LevelTwo = styled.div`
  background-color: ${AppColors.primary};
`;

const Footer = () => {
  return (
    <Wrapper>
      <FooterTop />
      <LevelTwo className="container">
        <FooterLevelOne />
        <FooterLevelTwo />
        <FooterLevelThree />
      </LevelTwo>
    </Wrapper>
  );
};

export default Footer;
