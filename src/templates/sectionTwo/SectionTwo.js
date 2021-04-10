import React from "react";
import styled from "styled-components";
import FlextItem from "../../layout/FlexItem";
import FlexWrapper from "../../layout/FlexWrap";
import BackgroundDescription from "../../UI/organisms/backgroundDes/BackgroundDescription";
import bg from "../../assets/background/sectionOneBg.png";
import BreakDown from "../../UI/organisms/breakdown/Breakdown";
import ProfileCard from "../../UI/organisms/profileCard/ProfileCard";
import profile_url from "../../assets/profile3.png";

const Wrapper = styled.div`
  margin-top: ${({ marginTop }) => marginTop};
  position: relative;
`;

const SectionTwo = ({ marginTop }) => {
  return (
    <Wrapper marginTop={marginTop}>
      <FlexWrapper>
        <FlextItem flex={1}>
          <div className="left-margin">
            <BreakDown
              padding="2em"
              mediumHeader="Strategy. Design <br /> Content. Technology <br />
        Development"
              tinytext=" There’s no secret sauce, no wizard behind the curtain. What <br /> makes
        Aerolab tick is an interdisciplinary team with a <br /> framework that
        fosters candid collaboration."
              btntext=" More know About us"
            />
          </div>
        </FlextItem>
        <FlextItem flex={1}>
          <BackgroundDescription bgImage={bg} bottom="-120px" left="-50px">
            <ProfileCard
              padding="1.5em 2.5em"
              borderradius="10px"
              imgurl={profile_url}
              italicSize="16px"
              description="“I know they are going to be honest with me. I am not going to get a subpar product; I know it is going to be good. That is the number one advantage of working with Exhibit Systems."
              name="Lina Hart"
              designation="Founder & CEO, Jico"
            />
          </BackgroundDescription>
        </FlextItem>
      </FlexWrapper>
    </Wrapper>
  );
};

export default SectionTwo;
