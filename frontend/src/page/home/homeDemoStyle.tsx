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
align-items: flex-start;
justify-content: flex-start;
flex-direction: column;
width: 100%;
padding: 15px 20px 15px 20px;
flex: 1;
`;
const Title = styled.h2`
color: ${paletColor.titleColor};
font-size: 1.3rem;
font-weight: 600;

`;
const Br = styled.hr`
border-top: 3px solid ;
width: 25px;
border-radius: 20px;
color:${paletColor.color};
`;
const ContainerTwo = styled.div`
display: flex;
align-items: flex-start;
justify-content: flex-start;
flex-direction: column;
width: 100%;
background-color: ${paletColor.background};
flex: 25;
`;
const ContainerRedes = styled(motion.div)`
cursor: pointer;
display: flex;
align-items: center;
justify-content: flex-start;
flex-direction: row;
width: 100%;
border-bottom: 1px solid #e5e5e5;
padding: 5px 25px 5px 25px;
gap: 20px;
transition: 1s;
&:hover{
    background-color: ${paletColor.hover};
}
`;
const I = styled.i`
font-size: 30px;
`;
const ContainerInfo = styled.div``
const Visit = styled.p`
font-weight: 400;
`

const Redes = styled.h3`
font-weight: 500;
`
const Number = styled.h3`
font-weight: 500;
`
const ContainerThree = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 2;
width: 100%;
padding: 10px 10px;
`;
const Button = styled.button`
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  position: relative;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;
  transition: filter 250ms;
  user-select: none;
  touch-action: manipulation;
  width: 100%;
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
}
`;

export {Shadow,Edge ,Front, Container, ContainerOne, Title, Br, ContainerTwo, ContainerRedes, I, ContainerInfo, Visit ,
Redes,Number,ContainerThree,Button}