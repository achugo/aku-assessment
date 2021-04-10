import React from "react";
import styled from "styled-components";
import FlextItem from "../../layout/FlexItem";
import FlexWrapper from "../../layout/FlexWrap";
import BreakDown from "../../UI/organisms/breakdown/Breakdown";
import ProfileCard from "../../UI/organisms/profileCard/ProfileCard";
import profile_url from "../../assets/profilee.png";

const Wrapper = styled.div`
  position: relative;
  margin-top: -100px;
`;

const Strategy = () => {
  return (
    <Wrapper className="container">
      <FlexWrapper>
        <FlextItem flex={8}>
          <BreakDown
            padding="8em"
            miniHeader="What we do for you"
            mediumHeader="Strategy. Design <br /> Content. Technology <br />
        Development"
            tinytext=" There’s no secret sauce, no wizard behind the curtain. What <br /> makes
        Aerolab tick is an interdisciplinary team with a <br /> framework that
        fosters candid collaboration."
            btntext=" More know About us"
          />
        </FlextItem>
        <FlextItem flex={5}>
          <ProfileCard
            padding="10em 2.5em 4em 2.5em"
            imgurl={profile_url}
            italicSize="20px"
            description="With More than 10 Years of Knowledge and Expertise we Design and Code Websites and Apps, We Build Brands and Help Them Succeed"
            name="Genevieve Rodriquez"
            designation="Founder & CEO, Webovio"
          />
        </FlextItem>
      </FlexWrapper>
    </Wrapper>
  );
};

export default Strategy;
