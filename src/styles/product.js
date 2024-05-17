import styled from "styled-components";

export const StyledProduct = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-width: 300px;
    height: 310px;
    border: 2px solid var(--gray-20);
    border-radius: 5px;

    img{
        width: 100%;
        height: 150px;
        object-fit:contain; 
        background: var(--gray-0)
    }
    h3{
        font-style: normal;
        font-weight: 700;
        font-size: 1.25rem;
        margin-left: 21px;
        margin-top: 16px;
        margin-bottom: 16px;
    }
    p{
        font-style: normal;
        font-weight: 400;
        font-size: 0.725rem;
        margin-left: 21px;
        color: var(--gray-50);
        margin-bottom: 14px;
    }
    .Price{
        font-style: normal;
        font-weight: 600;
        font-size: 0.825rem;
        color: var(--color-primary);
    }
    button{
        background: var(--color-primary);
        width: 90px;
        height: 32px;
        border-radius: 6px;
        border: none;
        color: #FFFFFF;
        font-style: normal;
        font-weight: 500;   
        font-size: 0.75rem;
        margin-left: 21px;
    }
`