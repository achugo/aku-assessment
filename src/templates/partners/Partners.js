import React from "react";
import styled from "styled-components";
import FlextItem from "../../layout/FlexItem";
import FlexWrapper from "../../layout/FlexWrap";
import { ReactComponent as Deal } from "../../assets/svgs/partners/Deal.svg";
import { ReactComponent as Porters } from "../../assets/svgs/partners/Porters.svg";
import { ReactComponent as Leadership } from "../../assets/svgs/partners/LeadershipAcademy.svg";
import { ReactComponent as WallBridge } from "../../assets/svgs/partners/WallBridge.svg";
import { ReactComponent as Phallen } from "../../assets/svgs/partners/Phallen.svg";
import { AppColors } from "../../config/appTheme/color";

const Wrapper = styled.div`
  box-shadow: 50px 50px 100px #00000025;
  border-radius: 2px;
  opacity: 1;
  position: relative;
  bottom: 100px;
  background-color: ${AppColors.white};
  padding-top: 40px;
  padding-bottom: 40px;

  svg {
    max-width: 100%;

    &::hover {
      filter: grayscale(100%) sepia(100%);
    }
  }
`;

const Partners = () => {
  return (
    <Wrapper className="left-margin right-padding">
      <FlexWrapper>
        <FlextItem flex={1} style={{ textAlign: "center" }}>
          <Porters />
        </FlextItem>
        <FlextItem flex={1} style={{ textAlign: "center" }}>
          <Leadership />
        </FlextItem>
        <FlextItem flex={1} style={{ textAlign: "center" }}>
          <WallBridge />
        </FlextItem>
        <FlextItem flex={1} style={{ textAlign: "center" }}>
          <Deal />
        </FlextItem>
        <FlextItem flex={1} style={{ textAlign: "center" }}>
          <Phallen />
        </FlextItem>
      </FlexWrapper>
    </Wrapper>
  );
};

export default Partners;
