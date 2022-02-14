import styled from "styled-components";

export const Container = styled.main`

    max-width: 1280px;
    margin: 0 auto;
    background: var(--gray-100);
    padding: 1.5rem 1.5rem 3rem 1.5rem;
    margin-top: 2rem;


    h1{
        text-align: center;
        margin-bottom: 4rem;
    }
    h2{
        margin-bottom: 1rem;
    }

`;

export const Content = styled.div`
    display: flex;
    gap: 3rem;

    @media (max-width: 910px){
        flex-direction: column;
        gap: 6rem;
    }
`;

export const SectionLeft = styled.form`

    display: flex;
    gap: 3rem;


`;

export const SectionLeftContent = styled.div`

    display: flex;
    flex-direction: column;
    //width: 100%;

    label{
        font-size: 0.7rem;
        color: var(--gray-600);
        margin: 1.5rem 0;

        &.error{
            color: red;
        }
    }
    div i{
        font-size: 0.8rem;
        color: #111;
    }

    input{
        border: none;
        border-bottom: 1px solid #333;
        outline: none;
        background: transparent;
        max-width: 240px;
        padding-bottom: 0.3rem;

        &.errorInput{
            border-bottom: 1px solid red;

        }
    }


    @media (max-width: 480px){
        label#aporte{
            margin-top: 4.3rem;
        }
    }

    @media (max-width: 420px){
        input{
            width: 150px;
        }

        label#aporte{
            margin-top: 3.77rem;
        }
    }

    @media (max-width: 362px){
        input{
            width: 130px;
        }
    }


`;

export const Button = styled.button`
        border: 1px solid #333 ;
        margin-top: 2rem;
        padding: 0.7rem 1rem;
        border-radius: 0.35rem;

        color: #000;
        font-weight: bold;
        font-size: 1rem;

        &.simular{
            background: var(--gray-600);
            border: none;
        }
        &.simular.btnActive{
            background: var(--orange-500);

        }

        @media (max-width: 420px){
            width: 150px;
        }

        @media (max-width: 362px){
            width: 130px;
        
    }
`;

export const Buttons = styled.div`

    margin-top: 0.5rem;
    margin-bottom: 1rem;
    display: flex;

    button{
        background: #fff;
        padding: 0.8rem 1.4rem;
        border: 1px solid #000;
        outline: none;
        display: flex;
        align-items: center;
        gap: 0.2rem;
        &:first-child{
            //background: var(--orange-500);
            border-top-left-radius: 0.35rem;
            border-bottom-left-radius: 0.35rem;
            //color: #fff;
        }
        &:last-child{
            border-top-right-radius: 0.35rem;
            border-bottom-right-radius: 0.35rem;
        }

        &.active{
            background: var(--orange-500);
            color: #fff;

        }
        svg{
            color: #fff;
        }

      
    }

    @media (max-width: 480px){
        display: flex;
        flex-direction: column;
    }

      // MOBILE
      @media (max-width: 420px){
            button{
                width: 140px;
                padding: 0.5rem;
            }
        }

`;

export const ContentInput = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.5rem 0;
    position: relative;

    span{
        position: absolute;
        bottom: -12px;
        color: red;
        font-size: 0.7rem;
    }
`;