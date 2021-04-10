import React from "react";
import styled from "styled-components";
import backgroundImage from "../../assets/background/hero-bg.png";
import HeroText from "../../UI/organisms/heroText/HeroText";

const Wrapper = styled.div`
  position: relative;
  top: 0px;
  padding-top: 100px;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 80vh;
`;

const HeroContent = styled.div`
  margin-top: 5rem;
`;

const Hero = () => {
  return (
    <Wrapper>
      <HeroContent>
        <div className="container">
          <HeroText />
        </div>
      </HeroContent>
    </Wrapper>
  );
};

export default Hero;
