import React from "react";
import styled from "styled-components";
import FlextItem from "../../layout/FlexItem";
import FlexWrapper from "../../layout/FlexWrap";
import BackgroundDescription from "../../UI/organisms/backgroundDes/BackgroundDescription";
import bg from "../../assets/background/sectionOneBg.png";
import BreakDown from "../../UI/organisms/breakdown/Breakdown";
import ProfileCard from "../../UI/organisms/profileCard/ProfileCard";
import profile_url from "../../assets/profile2.png";

const Wrapper = styled.div`
  margin-top: ${({ marginTop }) => marginTop};
  position: relative;

  .adjust {
    @media screen and (min-width: 768px) {
      padding-left: 2.5em;
    }
  }
`;

const SectionOne = ({ marginTop }) => {
  return (
    <Wrapper marginTop={marginTop}>
      <FlexWrapper>
        <FlextItem flex={1}>
          <BackgroundDescription bgImage={bg} bottom="-120px" right="-50px">
            <ProfileCard
              padding="1.5em 2.5em"
              borderradius="10px"
              imgurl={profile_url}
              italicSize="16px"
              description="“In my history of working with trade show vendors, I can honestly say that there is not one company that I've ever worked with that has better service than Exhibit Systems.”"
              name="Angel Armstrong"
              designation="Founder & CEO, Google"
            />
          </BackgroundDescription>
        </FlextItem>
        <FlextItem flex={1}>
          <div className="adjust">
            <div className="right-margin">
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
          </div>
        </FlextItem>
      </FlexWrapper>
    </Wrapper>
  );
};

export default SectionOne;
