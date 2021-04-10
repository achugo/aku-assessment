import React from "react";
import styled from "styled-components";
import ItalicText from "../../atoms/tinyText/ItalicText";
import UserInfo from "../../molecules/userInfo/UserInfo";

const Wrapper = styled.div`
  position: relative;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 100px 100px #00000025;
  padding: ${({ padding }) => padding};
  max-width: 400px;
  border-radius: ${({ borderradius }) => borderradius};
`;

const ProfileCard = ({
  description,
  name,
  designation,
  italicSize,
  imgurl,
  padding,
  borderradius,
}) => {
  return (
    <Wrapper padding={padding} borderradius={borderradius}>
      <ItalicText size={italicSize}>{description}</ItalicText>
      <UserInfo imgurl={imgurl} name={name} designation={designation} />
    </Wrapper>
  );
};

export default ProfileCard;
