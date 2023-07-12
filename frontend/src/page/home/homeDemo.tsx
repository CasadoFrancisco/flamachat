import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Edge,
  Front,
  Shadow,
  Container,
  ContainerOne,
  Title,
  Br,
  ContainerTwo,
  ContainerRedes,
  I,
  ContainerInfo,
  Visit,
  Redes,
  Number,
  ContainerThree,
  Button
} from "./homeDemoStyle";
import socialRed from "../../config/redes.json";
import { Lorader } from "../../components/loader/loader";
import { AnimatePresence } from "framer-motion";

export const HomeDemo: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const openInsta = () => {
    window.open("https://www.instagram.com", "_blank");
  };

  const openFace = () => {
    window.open("https://es-la.facebook.com/", "_blank");
  };

  const openChat = (): boolean => {
    const message = encodeURIComponent("que onda chango!");
    const whatsappLink = `https://wa.me/+541124681521?text=${message}`;
    window.open(whatsappLink, "_blank");
    return true;
  };

  const Navigate = useNavigate();
  const NextPage = () => {
    Navigate("/formulario");
  };

  const handleClick = (onClick: string) => {
    switch (onClick) {
      case "openInsta":
        openInsta();
        break;
      case "openFace":
        openFace();
        break;
      case "openChat":
        openChat();
        break;
      default:
        break;
    }
  };

  return (
    <>
      {isLoading ? (
        <Lorader />
      ) : (
        <Container>
          <ContainerOne>
            <Title>Somos Flamachat ! 🙌🏼</Title>
            <Br></Br>
          </ContainerOne>
          <ContainerTwo>
            <AnimatePresence>
              {socialRed.SocialMedia.map((redSocial, index) => (
                
                  <ContainerRedes onClick={() => handleClick(redSocial.onClick)}
                  key={index}
                  initial={{ opacity: 0, x: -200 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  exit={{ opacity: 0, x: -100 }}
                  >
                    <I className={redSocial.icon} style={{ color: redSocial.colorIcon }} />
                    <ContainerInfo>
                      <Visit>visitanos en:</Visit>
                      <Redes>{redSocial.lavel}</Redes>
                    </ContainerInfo>
                  </ContainerRedes>
                
              ))}
            </AnimatePresence>
            <AnimatePresence>
              <ContainerRedes
                initial={{ opacity: 0, x: -250 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: socialRed.SocialMedia.length * 0.1 }}
                exit={{ opacity: 0, x: -100 }}
              >
                <I className={socialRed.contact.icon} />
                <ContainerInfo>
                  <Visit>Llamanos a:</Visit>
                  <Number>{socialRed.contact.tel}</Number>
                </ContainerInfo>
              </ContainerRedes>
            </AnimatePresence>
          </ContainerTwo>
          <ContainerThree>
            <Button onClick={NextPage}>
              <Shadow />
              <Edge />
              <Front>Iniciar Conversacion</Front>
            </Button>
          </ContainerThree>
        </Container>
      )}
    </>
  );
};
