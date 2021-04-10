import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/svgs/logo.svg";
import { ReactComponent as Button } from "../../assets/svgs/hamburger.svg";

const Nav = styled.nav`
  margin-left: 0;
  width: 100%;
  height: 40px;
  position: fixed;
  z-index: 1;

  padding: 2em 0;
  background-color: transparent;
`;

const NavItems = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Navbar = () => {
  const [scrollState, setScrollState] = useState("");

  useEffect(() => {
    let listener = null;
    listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 100) {
        if (scrollState !== "colored") {
          setScrollState("colored");
          console.log("scrolled!!");
        }
      } else {
        if (scrollState !== "colored") {
          setScrollState("transparent");
        }
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [scrollState]);
  return (
    <Nav className={scrollState}>
      <div className="container">
        <NavItems>
          <Logo />
          <Button />
        </NavItems>
      </div>
    </Nav>
  );
};

export default Navbar;
