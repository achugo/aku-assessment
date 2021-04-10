import React from "react";
import Divide from "../templates/divide/Divide";
import Footer from "../templates/footer/Footer";
import Hero from "../templates/Hero/Hero";
import Navbar from "../templates/navbar/Navbar";
import Partners from "../templates/partners/Partners";
import Posts from "../templates/Posts/Posts";
import SectionOne from "../templates/sectionOne/SectionOne";
import SectionThree from "../templates/sectionThree/SectionThree";
import SectionTwo from "../templates/sectionTwo/SectionTwo";
import Strategy from "../templates/strategy/Strategy";
import PreFooter from "../UI/organisms/prefooter/PreFooter";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Partners />
      <Strategy />
      <Divide
        heading="We Have Some <br />
              Awesomr Project."
        content=" Lorem Ipsum is simply dummy text of the printing and typesetting
              <br />
              industry. Lorem Ipsum has been the industry's standard dummy text
              <br />
              ever since the 1500s,"
      />
      <SectionOne marginTop="5em" />
      <SectionTwo marginTop="10em" />
      <SectionThree marginTop="10em" />
      <Divide
        style={{ marginTop: "10em" }}
        heading="Deation & Evaluation - Best Way to Kick <br /> off Your Product Idea"
      />
      <Posts />
      <PreFooter />
      <Footer />
    </div>
  );
};

export default Home;
