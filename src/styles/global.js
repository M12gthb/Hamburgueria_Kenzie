import { createGlobalStyle } from "styled-components";
export const Globalstyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: 'Inter', sans-serif;
    }
    ul, ol{
        list-style: none;
    }
    li{
        list-style: none;
    }
    button{
        cursor: pointer;
        background: transparent;
        border: 0;
        
    }
    :root{
        --color-primary: #27AE60;
        --color-primary-50: #93D7AF;
        --gray-100: #333333;
        --gray-50: #828282;
        --gray-20: #E0E0E0;
        --gray-0: #F5F5F5;
    }
`