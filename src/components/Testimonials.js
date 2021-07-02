import React from "react";
import styled from "styled-components";
import Emily from "../images/image-emily.jpg";
import Jennie from "../images/image-jennie.jpg";
import Thomas from "../images/image-thomas.jpg";

const Testimonials = () => {
  return (
    <>
      <Row>
        <Title>
          <h4>Client Testimonials</h4>
        </Title>
        <Col>
          <Box>
            <img src={Emily} alt="emily" />
            <p>
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </p>
            <h5>Emily R.</h5>
            <span>Marketing Director</span>
          </Box>
          <Box>
            <img src={Thomas} alt="thomas" />
            <p>
              Sunnyside’s enthusiasm coupled with their keen interest in our
              brand’s success made it a satisfying and enjoyable experience.
            </p>
            <h5>Thomas S.</h5>
            <span>Chief Operating Officer </span>
          </Box>
          <Box>
            <img src={Jennie} alt="jennie" />
            <p>
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </p>
            <h5>Jennie F.</h5>
            <span>Business Owner</span>
          </Box>
        </Col>
      </Row>
    </>
  );
};

const Row = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  @media (max-width: 992px) {
    min-height: 100vh;
  }
`;

const Title = styled.div`
  flex: 0.3;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  h4 {
    color: hsl(210, 4%, 67%);
    text-transform: uppercase;
    letter-spacing: 0.5rem;
    @media (max-width: 992px) {
      font-size: 1.5rem;
    }
    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
  }
  @media (max-width: 992px) {
    padding: 4rem 0;
  }
`;

const Col = styled.div`
  flex: 0.7;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const Box = styled.div`
  flex: 0.25;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 2rem;
  img {
    border-radius: 50%;
    width: 30%;
  }
  p {
    padding: 3rem 0;
  }
  @media (max-width: 992px) {
    padding: 2rem 7rem;
  }
  @media (max-width: 578px) {
    padding: 2rem 5rem;
  }
`;

export default Testimonials;
