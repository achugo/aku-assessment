import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border-radius: 50%;
  height: 50px;

  img {
    max-width: 150%;
    position: relative;
    bottom: 20px;
  }
`;

const ProfileImage = ({ width, imgsrc }) => {
  return (
    <Wrapper>
      <img src={imgsrc} width={width} alt="profile" />
    </Wrapper>
  );
};

export default ProfileImage;
