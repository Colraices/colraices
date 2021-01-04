import * as React from "react";
import styled from "styled-components";

import BackgroundImage from "../components/backgroundImage";
import { Comments } from "../utils/icons";
import { Separator } from "../style/components";

// markup
const SectionInfo = () => {
  return (
    <StyledBackgroundSection>
      <BackgroundImage name="section_info">
        <div className="container">
          <div className="box">
            <h2>¡Tú, que buscas tu próxima casa en Colombia!</h2>
            <p>
              Ven y conoce <strong>más de 130 proyectos</strong> en todo
              Colombia y accede a todas las <b>opciones de financiación</b> que
              tenemos disponibles para colombianos en el exterior en un espacio
              que hemos diseñado especialmente para hacer tu vida mucho más
              fácil.
            </p>
            <p>
              <b>Ingresa en Vitrina Colombia</b> y Demos juntos el próximo paso
              hacia tu casa en Colombia, allí te acompañaremos como tu lo
              prefieras y en los tiempos que tu necesitas.
            </p>
            <div className="icons">
              <div className="icon">
                <Comments />
                <h3>Chalas virtuales</h3>
              </div>
              <div className="icon">
                <Comments />
                <h3>Chat</h3>
              </div>
              <div className="icon">
                <Comments />
                <h3>Llamadas</h3>
              </div>
            </div>
            <a href="google.com">Visita Vitrina Colombia aquí</a>
          </div>
        </div>
        <Separator position="absolute" bottom="0" right="0" />
      </BackgroundImage>
    </StyledBackgroundSection>
  );
};

const StyledBackgroundSection = styled.section`
  & > div {
    position: relative;
    &::after {
      background-attachment: fixed;
    }
  }
  & .container {
    width: 100%;
    max-width: 1032px;
    margin: 0 auto;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #ffffff;
    opacity: 0.9;
    padding: 4rem 0 3rem;
  }

  .box {
    & h2 {
      display: block;
      width: 100%;
      max-width: 642px;
      font-size: 70px;
      font-family: "Segoe UI";
      color: #2d4077;
      margin: 0 auto;
      text-align: center;
      margin-bottom: 3rem;
    }
    & p {
      font-size: 25px;
      text-align: center;
      color: #707070;
      display: block;
      width: 100%;
      width: 664px;
      margin: 0 auto 1rem;

      & b,
      & strong {
        color: #caa55e;
        font-weight: 600;
      }
    }

    & .icons {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      width: 100%;
      max-width: 345px;
      margin: 3rem auto;

      & .icon {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        & svg {
          width: 50px;
          height: 50px;
          color: #2d4077;
          margin-bottom: 0.25rem;
        }
        & h3 {
          font-size: 13px;
          color: #585856;
          text-align: center;
        }
      }
    }

    & a {
      display: block;
      text-decoration: none;
      font-weight: bold;
      font-size: 30px;
      text-align: center;
      color: #caa55e;
    }
  }
`;

export default SectionInfo;
