import styled from "styled-components";

export const StyledSearch = styled.div`
   position: relative;
   left: 10px;
   margin-top:30px;
   margin-bottom: 26px;
   h1{
      font-style: normal;
      font-weight: 700;
      font-size: 1.265rem;
   }
   span{
      font-style: normal;
      font-weight: 700;
      font-size: 1.265rem;
      color: var(--gray-50);
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
      margin-top:10px;
   }
   @media (min-width:1023px) {
      left: 7%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width:940px;
      button{
         margin: 0;
      }
   }

`
