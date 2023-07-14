import styled from "styled-components";
import { paletColor } from "../../theme/theme";
import {motion} from "framer-motion"


const Container = styled.div`
display: flex;
align-items: flex-start;
justify-content: flex-start;
flex-direction: column;
height: 100vh;
`;
const ContainerOne = styled.div`
display: flex;
position: fixed;
align-items: flex-start;
justify-content: flex-start;
flex-direction: column;
width: 100%;
padding: 15px 20px 15px 20px;
flex: 1;
background-color: ${paletColor.background};
`;
const Title = styled.h2`
color: ${paletColor.titleColor};
font-size: 1.3rem;
font-weight: 600;

`;
const Br = styled.hr`
border: none;
border-top: 3px solid ;
width: 25px;
border-radius: 20px;
color:${paletColor.color};
`;
const Formulario = styled.form`
padding-top: 70px;
display: flex;
align-items: flex-start;
justify-content: flex-start;
flex-direction: column;
width: 100%;
background-color: ${paletColor.background};
flex: 25;
padding-left: 20px;
padding-right: 20px;
gap: 5px;
@media(max-height:600px){
padding-bottom: 80px;
}
`;
const Detail = styled.span`
display: block;
font-size: 1.2rem;
font-weight: 500;
color: ${paletColor.titleColor};

`;
const InputDetail = styled.label`
font-size: 12px;
font-weight: 500;
color: ${paletColor.titleColor};
`;
const Input = styled.input`
min-height: 42px;
font-weight: 400;
font-size: 14px;
margin: 8px 0;
border: 1px solid #aaa;
width: 100%;
padding: 0 15px;
border-radius: 5px;
&:focus{
    outline: none;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}
`;
const TextTarea = styled.textarea`
font-weight: 400;
font-size: 14px;
margin: 8px 0;
border: 1px solid #aaa;
width: 100%;
padding: 10px 15px;
border-radius: 5px;
height: 40%;
&:focus{
    outline: none;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}
`;
const ContainerThree = styled.div`
display: flex;
position: fixed;
bottom: 0;
align-items: center;
justify-content: space-between;
flex: 2;
width: 100%;
padding: 10px 10px;
gap: 20px;
background-color: ${paletColor.background};
`;
const Button = styled.button`

  font-family: 'Raleway', sans-serif;
  position: relative;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;
  transition: filter 250ms;
  user-select: none;
  touch-action: manipulation;
  width: 50%;
    &:hover {
      filter: brightness(110%);
    }
    &:focus:not(:focus-visible) {
      outline: none;
    }
    
`
const Shadow = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: hsl(0deg 0% 0% / 0.25);
  will-change: transform;
  transform: translateY(2px);
  transition: transform 600ms cubic-bezier(.3, .7, .4, 1);
  
`
const Edge = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: linear-gradient(
    to left,
    hsl(340deg 100% 16%) 0%,
    hsl(340deg 100% 32%) 8%,
    hsl(340deg 100% 32%) 92%,
    hsl(340deg 100% 16%) 100%
  );
`;

const Front = styled.span`
  display: block;
  position: relative;
  padding: 12px 27px;
  border-radius: 12px;
  font-size: 1.1rem;
  color: white;
  background: hsl(345deg 100% 47%);
  will-change: transform;
  transform: translateY(-4px);
  transition: transform 600ms cubic-bezier(.3, .7, .4, 1);

  ${Button}:hover & {
    transform: translateY(-6px);
    transition: transform 250ms cubic-bezier(.3, .7, .4, 1.5);
  }

  ${Button}:active & {
    transform: translateY(-2px);
    transition: transform 34ms;
  }
  @media(max-width: 700px){
font-size: 0.9rem;

}`

export { Container, ContainerOne, Title, Br, Formulario, ContainerThree, Shadow, Edge, Front, Detail, InputDetail, Input, TextTarea, Button }