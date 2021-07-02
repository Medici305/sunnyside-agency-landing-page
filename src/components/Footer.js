import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <Row>
        <h4>sunnyside</h4>
        <nav>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
        </nav>
        <Socials>
          <FontAwesomeIcon size="2x" icon={faFacebook} />
          <FontAwesomeIcon size="2x" icon={faInstagram} />
          <FontAwesomeIcon size="2x" icon={faTwitter} />
          <FontAwesomeIcon size="2x" icon={faPinterest} />
        </Socials>
      </Row>
    </>
  );
};

const Row = styled.div`
  min-height: 40vh;
  background: #5edcc2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h4,
  a,
  svg {
    color: hsl(167, 40%, 24%);
    font-family: Barlow;
  }
  h4 {
  }
  nav {
    padding: 3rem 10rem;
    width: 50%;
    display: flex;
    justify-content: space-around;
    a {
      text-transform: none;
      font-weight: 200;
    }
    @media (max-width: 992px) {
      width: 100%;
    }
    @media (max-width: 578px) {
      padding: 3rem 5rem;
    }
  }
`;

const Socials = styled.div`
  width: 25%;
  display: flex;
  justify-content: space-around;
  @media (max-width: 992px) {
    width: 50%;
  }
`;

export default Footer;
