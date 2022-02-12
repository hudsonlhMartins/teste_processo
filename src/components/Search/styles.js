import styled from "styled-components";

export const Label = styled.label`

                width: 400px;
                position: relative;
                background: #fff;
                border-radius: 0.40rem;
                padding: 0.45rem 0.5rem 0.45rem 0.5rem;
                display: flex;
                align-items: center;
                
                input{
                    background: transparent;
                    border: none;
                    outline: none;
                    ::placeholder{
                    color: var(--gray-600);
                    font-size: 0.8rem;
                    }
                    padding-left: 1.3rem;
                }
                svg{
                    position: absolute;
                    left: 6px;
                }
            

`;