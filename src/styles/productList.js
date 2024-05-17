import styled from "styled-components";

export const StyledProductList = styled.ul`
    max-width:940px;
    width: 100%;
    display:flex;
    overflow-x: auto;
    gap: 20px;
    padding-left: 10px;
    padding-bottom: 16px;
    margin-top:15px;
    @media (min-width: 1024px) {
        flex-wrap: wrap;
        position: relative;
        left: 7%;
        padding-left: 0;
    }
`