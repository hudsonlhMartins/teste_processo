import styled from "styled-components";

export const Container = styled.section`
    position: relative;

    h2{
        position: absolute;
        top: -3rem;
    }

    div{
        position: relative;
        margin-top: 2rem;

        h3{
            position: absolute;

        }
    }
`;

export const Content = styled.ul`

    margin-top: 1rem;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    


    li{
        display: flex;
        flex-direction: column;
        //justify-content: center;
        padding: 1rem;
        background: #fff;
        width: 210px;
        align-items: center;
        box-shadow: 1px 1px 10px 2px #888888;
        border-radius: 0.25rem;
        strong{
            margin-bottom: 1.5rem;
        }

        span.green{
            color: #3F9C24;
        }
    }

    @media (max-width: 1170px){
        li{
            width: 170px;
        }
    }

    @media (max-width: 1130px){
        li{
            width: 150px;
        }
    }
    @media (max-width: 1080px){
        gap: 1rem;

        li{
            width: 140px;
        }
    }

    @media (max-width: 990px){
        gap: 2rem;
        grid-template-columns: 1fr 1fr;

        li{
            width: 200px;
        }
    }
    @media (max-width: 970px){
        li{
            width: 170px;
        }
    }

    @media (max-width: 910px){
        grid-template-columns: repeat(3, 1fr);

        li{
            width: 220px;
        }
    }

    @media (max-width: 745px){

        gap: 1rem;

        li{
            width: 180px;
        }
    }

    @media (max-width: 590px){

        li{
            width: 150px;
        }
    }
    @media (max-width: 500px){

        li{
            width: 130px;
        }
    }

    // MOBILE
    @media (max-width: 480px){
        grid-template-columns: repeat(2, 1fr);

        li{
            width: 160px;
        }

    }
`;
