import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    background-color: var(--gray-0);
    padding-bottom: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width: 150px;
        height: 50px;
    }
    form{
        padding: 0;
        position: relative;
        height: 45px;
        width: 300px;
    }
    input{
        border: none;
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 1;
        border: 2px solid var(--gray-20);
        border-radius: 6px;
        padding-left: 15px;
        font-style: normal;
        font-weight: 400;
        font-size: 0.75rem;
        color: var(--gray-50);
    }
    button{
        position: absolute;
        z-index: 2;
        background: var(--color-primary);
        width: 90px;
        height: 32px;
        border-radius: 6px;
        border: none;
        color: #FFFFFF;
        font-style: normal;
        font-weight: 500;   
        font-size: 0.75rem;
        top: 6px;
        left: 203px;      
    }
    @media (min-width:538px) {
        flex-direction: row;
        justify-content: space-between;
        padding-left: 7%;
        padding-right: 6%;
    img{
        margin-top:20px

    }
    form{
        margin-top: 14px;
    }
    }
` 