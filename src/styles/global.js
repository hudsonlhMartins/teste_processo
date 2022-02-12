import {createGlobalStyle} from 'styled-components'

export const GlobalStyled = createGlobalStyle`


    :root{
        --gray-100: #EFEFEF;
        --gray-400: #B3B3B3;
        --gray-600: #787878;

        --orange-500: #EE8E53;
    }


    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body{
        --webkit-font-smooth: antialiased;
        color: var(--shape);
        
    }
    html{
        @media (max-width: 1080px){
        font-size: 93.75%;
        }
        @media (max-width: 720px){
            font-size: 85.5%;
        }
    }
    
    button{
        cursor: pointer;
        border: 0;
    }
    body, input, button{
        font-family: 'Roboto', sans-serif;
    }
`;