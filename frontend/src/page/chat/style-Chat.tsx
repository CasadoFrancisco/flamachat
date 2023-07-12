import styled, { keyframes } from "styled-components";
import { paletColor } from "../../theme/theme";

const Container = styled.div`
display: flex;
align-items: flex-start;
justify-content: flex-start;
flex-direction: column;
height: 100vh;
z-index: 2;

`;
const ContainerOne = styled.div`
display: flex;
align-items: flex-start;
justify-content: flex-start;
position: fixed;
flex-direction: column;
width: 100%;
padding: 15px 20px 15px 20px;
background-color: white;

`;
const Title = styled.h2`
color: ${paletColor.titleColor};
font-size: 1.3rem;
font-weight: 600;
`;
const Hr = styled.hr`
border-top: 3px solid ;
width: 25px;
border-radius: 20px;
color:${paletColor.color};
`;
const ContainerTwo = styled.div`
display: flex;
align-items: flex-start;
justify-content: flex-start;
flex-direction: column-reverse;
padding-top: 70px;
padding-bottom: 80px;
padding-left: 15px;
padding-right: 15px;
width: 100%;
background-color: ${paletColor.background};
flex: 25;


`;
const ContainerChat = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 100%;

`;
const Chat = styled.p`

`;
const ContainerTrhee = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: fixed;
z-index: 2;
flex: 2;
width: 100%;
padding: 10px 10px;
bottom: 0;
gap: 10px;
background-color: white;
`;
const Input = styled.input`
width: 100%;
height: 50px;
border-radius: 10px;
background-color: #E0E0E0;
padding: 10px;
`;

const flyAnimation = keyframes`
  from {
    transform: translateY(0.1em);
  }

  to {
    transform: translateY(-0.1em);
  }
`;

const Button = styled.button`
  font-family: inherit;
  font-size: 16px;
  background: royalblue;
  color: white;
  padding: 0.7em 1em;
  padding-left: 0.9em;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.2s;
  @media(max-width:600px){
    padding-left: 0.2em;
  }
  @media(max-width:400px){
    font-size: 14px;
    
  }

  &:hover .svg-wrapper {
    animation: ${flyAnimation} 0.6s ease-in-out infinite alternate;
  }

  &:hover svg {
    transform: translateX(1.2em) rotate(45deg) scale(1.1);
  }

  &:hover span {
    transform: translateX(5em);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const SvgWrapper1 = styled.div`
  // Add your styles for svg-wrapper-1 here
`;

const SvgWrapper = styled.div`
  // Add your styles for svg-wrapper here
`;

const Svg = styled.svg`
  display: block;
  transform-origin: center center;
  transition: transform 0.3s ease-in-out;
`;

const Span = styled.span`
  display: block;
  margin-left: 0.3em;
  transition: all 0.3s ease-in-out;
  @media(max-width:400px){
    padding-right: 10px;
  }
`;

const Message = styled.p`
 padding: 15px;
 max-width: 70%;
 overflow-wrap: break-word;
`;

// Estilos para mensajes del lado derecho
const RightMessage = styled(Message)`
  align-self: flex-end;
  background-color: ${paletColor.color};
  color: ${paletColor.white};
  border-top-right-radius: 30px;
 border-top-left-radius: 30px;
 border-bottom-left-radius: 30px;
 margin-bottom: 10px;
 width: auto;
`;

// Estilos para mensajes del lado izquierdo
const LeftMessage = styled(Message)`
  align-self: flex-start;
  background-color: lightblue;
  border-top-right-radius: 30px;
 border-top-left-radius: 30px;
 border-bottom-right-radius: 30px;
 margin-bottom: 10px;
`;

export {
    RightMessage, LeftMessage, Container, ContainerOne, ContainerTwo, ContainerTrhee, Title, Hr, ContainerChat, Chat, Input, Button, Svg, SvgWrapper, SvgWrapper1, Span
}