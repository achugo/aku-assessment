import React from "react";
import styled from "styled-components";
import { AppColors } from "../../../config/appTheme/color";
import FlexFixed from "../../../layout/FlexFixed";
import FlextItem from "../../../layout/FlexItem";
import HeadingMin from "../../atoms/headings/HeadingMin";
import ProfileImage from "../../atoms/profileImage/ProfileImage";
import TinyText from "../../atoms/tinyText/TinyText";

const Wrapper = styled.div`
  position: relative;
  margin-top: 2em;
`;

const UserInfo = ({ name, designation, imgurl }) => {
  return (
    <Wrapper>
      <FlexFixed>
        <FlextItem flex={1}>
          <ProfileImage imgsrc={imgurl} />
        </FlextItem>
        <FlextItem flex={3}>
          <HeadingMin color={AppColors.primary}>{name}</HeadingMin>
          <TinyText color={AppColors.dark}>{designation}</TinyText>
        </FlextItem>
      </FlexFixed>
    </Wrapper>
  );
};

export default UserInfo;
