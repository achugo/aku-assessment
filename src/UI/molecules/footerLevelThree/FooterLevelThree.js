import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../../assets/svgs/logo.svg";
import { AppColors } from "../../../config/appTheme/color";
import TinyText from "../../atoms/tinyText/TinyText";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 2em 0;
`;

const FooterLevelThree = () => {
  return (
    <Wrapper>
      <Logo />
      <TinyText color={AppColors.footertext} size={16}>
        © 2020@webovio. All Rights Reserved.
      </TinyText>
    </Wrapper>
  );
};

export default FooterLevelThree;
