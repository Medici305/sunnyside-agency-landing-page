import React, { useState } from "react";
import Menu from "./Menu";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <StyleNav>
      {/* <Menu /> */}
      {/* 1. Logo */}
      <h1>sunnyside</h1>
      {/* 2. Nav bar */}
      <nav>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Services</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
        <button>Contact</button>
      </nav>
      {/* 3. Drop down menu */}
      <FontAwesomeIcon
        size="2x"
        onClick={() => setToggle(!toggle)}
        icon={faBars}
      />
      {toggle && <Menu />}
    </StyleNav>
  );
};

const StyleNav = styled.div`
  min-height: 12vh;
  display: flex;
  justify-content: space-between;
  position: relative;
  // Tablet view
  @media (max-width: 768px) {
    align-items: center;
  }
  h1 {
    flex: 0.15;
    display: flex;
    justify-content: center;
    align-items: center;
    // laptop view
    @media (max-width: 992px) {
      flex: 0.25;
    }
    // Tablet view
    @media (max-width: 768px) {
      flex: 0.35;
    }
    // Mobile view
    @media (max-width: 578px) {
      margin-left: 1.5rem;
    }
  }
  nav {
    flex: 0.4;
    display: flex;
    justify-content: space-around;
    align-items: center;
    a {
      color: #fff;
    }
    // laptop view
    @media (max-width: 992px) {
      flex: 0.6;
    }
    // tablet view
    @media (max-width: 768px) {
      display: none;
    }
  }
  svg {
    cursor: pointer;
    margin-right: 3rem;
    @media (min-width: 768px) {
      display: none;
    }
    @media (max-width: 768px) {
      display: flex;
      align-items: center;
    }
    // Mobile view
    @media (max-width: 578px) {
      margin-right: 1.5rem;
    }
  }
`;

export default Nav;
