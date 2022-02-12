import styled from "styled-components";

export const Container = styled.header`
    padding: 1.5rem 1rem;
    background: var(--gray-100);


`;

export const Content = styled.div`

    display: flex;
    align-items: center;
    gap: 1rem;

    div{
        display: flex;
        gap: 1.5rem;
        svg{
            cursor: pointer;
        }
    }

`;

export const Line = styled.div`
    padding: 0.9rem 0;
    width: 100%;
    background: #fff;
    border-radius: 0.40rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    span{
        position: absolute;
        top: -1.2rem;
        font-size: 0.9rem;
    }
`;