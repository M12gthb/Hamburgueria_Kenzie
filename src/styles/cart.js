import styled from "styled-components";

export const StyledCart = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 220px;
    margin-top:16px ;
    background-color: var(--gray-0);
    align-items: center;
    width: 300px;
    border-radius: 5px;
    position: relative;
    left: 10px;
    gap: 22px;
    li{
        display: flex;
        position: relative;
        width: 100%;
        height: 90px;
        padding-left: 10px;
        }
    img{
        height: 20px;
        width: 20px;
        background-color: var(--gray-20);
        width: 70px;
        height: 70px;
        border: none;
        border-radius: 6px;
    }
    .liH3{
        font-weight: 700;
        font-size: 14px;
        position: absolute;
        left: 90px;
        bottom: 55px;
        max-width: 80px;
    }
    .pLi{
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        color: var(--gray-50);
        position: absolute;
        left: 90px;
        bottom: 32px;
    }
    .buttonLi{
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        color: var(--gray-50);
        background: transparent;
        height: 20px;
        width: 20px;
        position: absolute;
        left: 80%;
        bottom: 65px;
    }
    h6{
        font-style: normal;
        font-weight: 700;
        font-size: 1.125rem;
        margin-top: 40px;
    }
    .noItens{
        font-style: normal;
        font-weight: 400;
        font-size: 0.825rem;
        margin-top: 0px;
        color: var(--gray-50);
    }
    @media (min-width:1024px) {
        left: 7%;
    }
    @media (min-width:1440px) {
        position: absolute;
        left: 74.25%;
        top:85px
    }
`
export const StyledDiv = styled.div`
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: var( --color-primary);
    border-radius: 5px 5px 0px 0px;
    h1{
        color:  #FFFFFF;
        font-style: normal;
        font-weight: 700;
        font-size: 1.125rem;
    }
`
export const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
    align-items: center;
    div{
        height: 2px;
        background-color: var(--gray-20);
        width: 300px;
    }
    section{
        width: 94%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 22px;
        margin-top: 16px;
    }
    h4{
        font-style: normal;
        font-weight: 600;
        font-size: 0.925rem;
    }
    h5{
        font-style: normal;
        font-weight: 600;
        font-size: 0.925rem;
        color: var(--gray-50);
    }
    button{
        border: none;
        border-radius: 6px;
        background-color: var(--gray-20);
        height: 60px;
        width: 95%;
        font-style: normal;
        font-weight: 600;
        font-size: 1rem;
        color: var(--gray-50);
    }
`
