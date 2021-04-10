import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/svgs/logo.svg";
import { ReactComponent as Button } from "../../assets/svgs/hamburger.svg";

const Nav = styled.nav`
  margin-left: 0;
  width: 100%;
  height: 200px;
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
  return (
    <Nav>
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
