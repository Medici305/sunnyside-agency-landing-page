import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-family: Barlow;
        color: #fff;
    }

    h1 {
        font-weight: 800;
    }

    h2 {
        font-size: 4rem;
        font-family: Fraunces;
        text-transform: uppercase;
        letter-spacing: .5rem;
        word-spacing: 1rem;
        @media (max-width: 768px) {
            font-size: 3.5rem;
        }
    }

    h3 {
        color: hsl(212, 27%, 19%);
        font-family: Fraunces;
        font-size: 2.5rem;
        font-weight: 800;

    }

    h4 {
        font-family: Fraunces;
        font-size: 2rem;
        font-weight: 800;
    }

    p {
        color: hsl(232, 10%, 55%);
        font-weight: 700;
        line-height: 2rem;
    }

    nav {

    }

    li {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: hsl(212, 27%, 19%);
        font-weight: 800;
        text-transform: uppercase;
        font-family: Fraunces;
    }

    button {
        font-family: Fraunces;
        font-size: 1rem;
        font-weight: 800;
        background: #6cd9fd;
        padding: 1rem 2rem;
        border-radius: 5rem;
        border: none;
        cursor: pointer;
        color: #fff;
    }

`;

export default GlobalStyle;
