import React from "react";
import Nav from "./Nav";
import styled from "styled-components";
import HeaderDesktop from "../images/desktop/image-header.jpg";
import HeaderMobile from "../images/mobile/image-header.jpg";

const Creatives = () => {
  return (
    <StyleCreative>
      <Nav />
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

export default Creatives;
