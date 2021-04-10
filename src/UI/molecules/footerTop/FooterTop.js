import React from "react";
import styled from "styled-components";
import { AppColors } from "../../../config/appTheme/color";

const Wrapper = styled.div`
  background-color: ${AppColors.secondary};
  height: 20vh;
  margin-top: -15vh;
`;

const FooterTop = () => {
  return <Wrapper />;
};

export default FooterTop;
