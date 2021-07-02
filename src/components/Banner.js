import React from "react";
import styled from "styled-components";
import Milk from "../images/desktop/image-gallery-milkbottles.jpg";
import Orange from "../images/desktop/image-gallery-orange.jpg";
import Cone from "../images/desktop/image-gallery-cone.jpg";
import Sugar from "../images/desktop/image-gallery-sugarcubes.jpg";

const Banner = () => {
  return (
    <>
      <Row>
        <Col>
          <Box>
            <img src={Milk} alt="milk" />
          </Box>
          <Box>
            <img src={Orange} alt="orange" />
          </Box>
        </Col>
        <Col>
          <Box>
            <img src={Cone} alt="cone" />
          </Box>
          <Box>
            <img src={Sugar} alt="sugar" />
          </Box>
        </Col>
      </Row>
    </>
  );
};

const Row = styled.div`
  min-height: 50vh;
  display: flex;
  flex-wrap: wrap;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Col = styled.div`
  display: flex;
  flex: 1;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const Box = styled.div`
  @media (max-width: 992px) {
    flex: 0.5;
  }
`;

export default Banner;
