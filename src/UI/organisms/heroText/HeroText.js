import React from "react";
import { AppColors } from "../../../config/appTheme/color";
import HeadingMax from "../../atoms/headings/HeadingMax";
import MoreInfo from "../../atoms/more/MoreInfo";
import TinyText from "../../atoms/tinyText/TinyText";

const HeroText = () => {
  return (
    <>
      <TinyText color={AppColors.white} size={16}>
        A place where
      </TinyText>
      <HeadingMax color={AppColors.white}>
        A creative agency <br /> for redemptive <br /> brands
      </HeadingMax>

      <TinyText color={AppColors.white} size={16}>
        Anteelo is a leading strategic design firm that builds powerful digital
        <br /> solutions for startups and enterprises.
      </TinyText>
      <MoreInfo color={AppColors.yellow}> LET'S GET STARTED</MoreInfo>
    </>
  );
};

export default HeroText;
