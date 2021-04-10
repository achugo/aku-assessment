import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 65vh;
  position: relative;
  /* background-image: url(${(bgImage) => bgImage}); */
`;

const Child = styled.div`
  @media screen and (min-width: 768px) {
    position: absolute;
    right: ${({ right }) => right};
    left: ${({ left }) => left};
    top: ${({ top }) => top};
    bottom: ${({ bottom }) => bottom};
  }

  @media screen and (max-width: 768px) {
    position: relative;
    /* right: 0;
    left: 0;
    top: 0;
    bottom: 0; */

    margin: 0 auto;
  }
`;

const BackgroundDescription = ({
  bgImage,
  children,
  top,
  bottom,
  left,
  right,
}) => {
  return (
    <Wrapper style={{ backgroundImage: `url(${bgImage})` }}>
      <Child top={top} bottom={bottom} right={right} left={left}>
        {children}
      </Child>
    </Wrapper>
  );
};

export default BackgroundDescription;
