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

    nav {

    }

    li {
        list-style: none;
    }

    a {
        text-decoration: none;
        font-weight: 600;
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
