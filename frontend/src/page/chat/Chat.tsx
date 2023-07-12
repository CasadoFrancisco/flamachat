import React, { useState, useEffect, ChangeEvent } from "react";
import { io } from "socket.io-client";
import { Container, ContainerOne, ContainerTwo, ContainerTrhee, Title, Hr, ContainerChat, RightMessage, LeftMessage, Input, Button, Svg, SvgWrapper, SvgWrapper1, Span } from "./style-Chat";

const socket = io("http://localhost:3000");
console.log(socket);

interface Message {
  usuario: string;
  mensaje: string;
}

export const ChatComponent: React.FC = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    socket.on("connect", () => setIsConnected(true));
    socket.on("chat_message", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });
    return () => {
      socket.off("connect");
      socket.off("chat_message");
    };
  }, []);

  const sendMessage = () => {
    socket.emit("chat_message", {
      usuario: socket.id,
      mensaje: newMessage,
    });
    setNewMessage("");
  };

  const isCurrentUser = (key: string): boolean => {
    return key === socket.id;
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <Container>
      <ContainerOne>
        <Title>Chat support</Title>
        <Hr />
      </ContainerOne>
      <ContainerTwo>
        <ContainerChat>
          {messages.map((message, index) => (
            isCurrentUser(message.usuario) ? (
              <RightMessage key={index}>{message.mensaje}</RightMessage>
            ) : (
              <LeftMessage key={index}>{message.mensaje}</LeftMessage>
            )
          ))}
        </ContainerChat>
      </ContainerTwo>
      <ContainerTrhee>
        <Input type="text" value={newMessage} onChange={(e: ChangeEvent<HTMLInputElement>) => setNewMessage(e.target.value)} placeholder="Escriba un mensaje..." onKeyDown={handleKeyDown}/>
        <Button onClick={sendMessage}>
          <SvgWrapper1>
            <SvgWrapper>
              <Svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor" />
              </Svg>
            </SvgWrapper>
          </SvgWrapper1>
          <Span>Send</Span>
        </Button>
      </ContainerTrhee>
    </Container>
  );
};





    //   <div >
    //    <h2>{isConnected ? "Conectado" : "No conectado"}</h2>
    //    <UlMensajes>
    //      {messages.map((message, index) => (
    //        <LiMensaje
    //          key={index}
    //          style={{
    //              width: "50%",
    //              alignSelf: isCurrentUser(message.usuario) ? "flex-end" : "flex-start",
    //            }}
    //        >
    //          {message.usuario}: {message.mensaje}
    //        </LiMensaje>
    //      ))}
    //    </UlMensajes>
    //    <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
    //    <button onClick={sendMessage}>Enviar</button>
    //  </div >