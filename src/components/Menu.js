import React from "react";
import styled from "styled-components";

const Menu = () => {
  return (
    <StyleMenu>
      <ul>
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
      </ul>
    </StyleMenu>
  );
};

const StyleMenu = styled.div`
  position: absolute;
  top: 7rem;
  left: 5%;
  width: 90%;
  background: #fff;
  @media (min-width: 768px) {
    display: none;
  }
  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    min-height: 45vh;
    a {
      color: hsl(232, 10%, 55%);
      font-weight: 700;
    }
    button {
      text-transform: uppercase;
      background: yellow;
      color: black;
    }
  }
`;

export default Menu;
