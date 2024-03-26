   import styled from "styled-components"

   export const Button = styled.button`
      height: 44px;
      width: 220px;
      color: white;
      background-color: black;
      padding: 10px 18px 10px 18px ;
      align-items: center;
      white-space: nowrap;
      border-radius: 5px;
      font-family: "Poppins", sans-serif;
      font-weight: 700;
      cursor: pointer;
      &:hover{
         background-color: white;
         color: black;
         border: 1px solid black;
         transition: 0.4s background ease-in;

      }
   `
   ;
   export const OutlineButton = styled(Button)`
      background-color: white;
      border: 1px solid black;
      color: black;
   &:hover{
         background-color: black;
         color: white;
         border: 1px solid transparent;
         
   }
   `;