import React from "react";
import styled from "styled-components";
import { AppColors } from "../../config/appTheme/color";
import FlextItem from "../../layout/FlexItem";
import FlexWrapper from "../../layout/FlexWrap";
import HeadingMedium from "../../UI/atoms/headings/HeadingMedium";
import TinyText from "../../UI/atoms/tinyText/TinyText";
import parse from "html-react-parser";

const Wrapper = styled.div`
  position: relative;
  margin-top: 5em;
`;

const Content = styled.div`
  border-top: 1px solid ${AppColors.border};
  padding-top: 4em;
`;
const Divide = ({ heading, content, style }) => {
  return (
    <Wrapper className="container" style={style}>
      <Content>
        <FlexWrapper>
          <FlextItem flex={2}>
            <HeadingMedium color={AppColors.primary} style={{ marginTop: 0 }}>
              {parse(heading)}
            </HeadingMedium>
          </FlextItem>
          <FlextItem flex={3}>
            <TinyText color={AppColors.text} size={16}>
              {content && parse(content)}
            </TinyText>
          </FlextItem>
        </FlexWrapper>
      </Content>
    </Wrapper>
  );
};

export default Divide;
