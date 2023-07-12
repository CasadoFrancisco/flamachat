import React,{useState,ChangeEvent} from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

import { Container, ContainerOne, Title, Br, Formulario, ContainerThree, Shadow, Edge, Front, Detail, InputDetail, Input, TextTarea, Button } from "./StyledDemoFormulario";


export const FormularioDemo: React.FC = () => {
    const Navigate = useNavigate();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const nextPage = () => {
        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
          toast.error('Por favor, completa todos los campos', {
            style: {
              borderRadius: "10px",
              backgroundColor: "#ef233c",
              color: "white",
            },
          });
        } else if (!validateEmail(email)) {
          toast.error('Por favor, ingresa un correo electrónico válido', {
            style: {
              borderRadius: "10px",
              backgroundColor: "#ef233c",
              color: "white",
            },
          });
        } else if (message.length < 10) {
          toast.error('Por favor, ingresa un mensaje con al menos 10 letras', {
            style: {
              borderRadius: "10px",
              backgroundColor: "#ef233c",
              color: "white",
            },
          });
        } else {
          Navigate('/chat');
        }
      };
    
    const backPage = () =>{
        Navigate("/")
    }
    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
      };
    
      const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
      };
    
      const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
      };
    const validateEmail = (email: string) => {
        // Expresión regular para validar el formato de un correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };
    return (
        <Container>
            <ContainerOne>
                <Title>Somos Flamachat ! 🙌🏼</Title>
                <Br />
            </ContainerOne>
            <Formulario>
                <Detail>Detalles de contacto</Detail>
                <InputDetail>Nombre</InputDetail>
                <Input placeholder="Enter your name" value={name} onChange={handleNameChange}/>
                <InputDetail>Email de contacto</InputDetail>
                <Input placeholder="Enter your Email" value={email} onChange={handleEmailChange}/>
                <Detail>Mensaje</Detail>
                <TextTarea placeholder="Put your message" value={message} onChange={handleMessageChange}/>
            </Formulario>
            <ContainerThree>
                <Button onClick={backPage}>
                    <Shadow />
                    <Edge />
                    <Front>Back</Front>
                </Button>
                <Button onClick={nextPage} >
                    <Shadow />
                    <Edge />
                    <Front>Submit</Front>
                </Button>
            </ContainerThree>
            <Toaster/>
        </Container>
    )
}