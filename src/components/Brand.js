import React from "react";
import styled from "styled-components";
import Egg from "../images/desktop/image-transform.jpg";
import Cup from "../images/desktop/image-stand-out.jpg";
import Cherry from "../images/desktop/image-graphic-design.jpg";
import Orange from "../images/desktop/image-photography.jpg";

const Brand = () => {
  return (
    <>
      <Row>
        <Desc>
          <h3>Transform your brand</h3>
          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <a href="#">Learn More</a>
        </Desc>
        <Col>
          <img src={Egg} alt="egg" />
        </Col>
      </Row>
      <RowRev>
        <Col>
          <img src={Cup} alt="cup" />
        </Col>
        <Desc>
          <h3>Stand out to the right audience</h3>
          <p>
            Using a collabrative formula of designers, researchers,
            photograghers, videographers, and copywriters, we'll build and
            extend your brand in digital places.
          </p>
          <a href="#">Learn More</a>
        </Desc>
      </RowRev>
      <RowLast>
        <ColBgLeft>
          <Box>
            <h4>Graphic Design</h4>
            <p>
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients'
              attention.
            </p>
          </Box>
        </ColBgLeft>
        <ColBgRight>
          <Box>
            <h4>Photography</h4>
            <p>
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </Box>
        </ColBgRight>
      </RowLast>
    </>
  );
};

const Row = styled.div`
  min-height: 75vh;
  display: flex;
  @media (max-width: 992px) {
    min-height: 100vh;
    flex-direction: column-reverse;
  }
`;

const RowRev = styled(Row)`
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const RowLast = styled(Row)`
  @media (max-width: 992px) {
    min-height: 150vh;
    flex-direction: column;
  }
  @media (max-width: 578px) {
    min-height: 175vh;
  }
`;

const Col = styled.div`
  flex: 1;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Desc = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5rem 0;
  & > * {
    padding: 1rem 10rem;
    @media (max-width: 1124px) {
      padding: 1rem 5rem;
    }
    @media (max-width: 578px) {
      text-align: center;
      padding: 1rem 4rem;
    }
  }
`;

const ColBgLeft = styled.div`
  background-image: url(${Cherry});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1;
  p,
  h4 {
    color: hsl(167, 40%, 24%);
  }
`;

const ColBgRight = styled(ColBgLeft)`
  background-image: url(${Orange});
  p,
  h4 {
    color: hsl(198, 62%, 26%);
  }
`;

const Box = styled.div`
  text-align: center;
  flex: 0.4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    padding: 1.5rem 10rem;
    @media (max-width: 768px) {
      padding: 1rem 4rem;
    }
  }
  @media (max-width: 768px) {
    flex: 0.3;
  }
`;

export default Brand;
