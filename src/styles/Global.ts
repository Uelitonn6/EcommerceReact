import { createGlobalStyle } from 'styled-components'

export const Globalstyle = createGlobalStyle`
    :root {
        --ColorWhite: #FFFFFF;
        --headerNav: #66c3ec;
        --colorFooter: #f6b033;
        --textBlueDark: #2c487b;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style-type: none;
        border: none;
        outline: none;
        font-size: 1.6rem;
        font-family: 'Inter', sans-serif;
    }

    html,
    body {
        overflow-x: hidden;
    }

    html {
        font-size: 62.5%;
    }

    img {
        display: block;
        max-width: 100%;
    }

    button {
        background-color: transparent;
        cursor: pointer;
    }
` 