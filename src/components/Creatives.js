import React from "react";
import Nav from "./Nav";
import styled from "styled-components";
import HeaderDesktop from "../images/desktop/image-header.jpg";
import HeaderMobile from "../images/mobile/image-header.jpg";
import Arrow from "../images/icon-arrow-down.svg";

const Creatives = () => {
  return (
    <StyleCreative>
      <Nav />
      <Box>
        <h2>We Are Creatives</h2>
        <img src={Arrow} alt="down arrow" />
      </Box>
    </StyleCreative>
  );
};

const StyleCreative = styled.div`
  min-height: 100vh;
  background-image: url(${HeaderDesktop});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom center;
  // Tablet view
  @media (max-width: 768px) {
    min-height: 80vh;
    background-image: url(${HeaderMobile});
  }
`;

const Box = styled.div`
  //border: 2px solid white;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    margin-bottom: 4rem;
    text-align: center;
  }
  // Tablet view
  @media (max-width: 768px) {
    margin-top: 1rem;
    h2 {
      margin-bottom: 1rem;
    }
  }
`;

export default Creatives;
