import React, { useEffect, useRef, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import Buttom from "./buttom";

// markup
const Form = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <Background
          className="overflow-y-auto"
          ref={modalRef}
          onClick={closeModal}
        >
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <FormContainer>
                <h3>Cuéntanos como podemos ayudarte</h3>
                <form>
                  <input type="text" placeholder="Nombre Completo" required />
                  <input
                    type="tel"
                    placeholder="Teléfono de contacto"
                    required
                  />
                  <input type="email" placeholder="E-mail" required />
                  <input
                    type="text"
                    placeholder="País y ciudad de residencia"
                    required
                  />
                  <select>
                    <option default>Ciudad de interés</option>
                    <option value="Barcelona">Barcelona</option>
                    <option value="Bogota">Bogota</option>
                  </select>
                  <label>
                    <input type="checkbox" value="on" id="on" />
                    *Acepto las políticas de uso de tratamientos de datos y
                    términos y condiciones de Colraices
                  </label>
                  <button type="submit">
                    <Buttom justify="center">Enviar</Buttom>
                  </button>
                </form>
              </FormContainer>
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};

export default Form;

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 60;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 530px;
  height: calc(100vh - 80px);
  background-color: #fff;
  margin-top: 80px;
  box-shadow: 0px 3px 6px #00000029;
  padding: 0 1rem;

  & h3 {
    color: #2d4077;
    font-size: 25px;
    text-align: center;
    padding: 1rem 0;
  }

  & form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 368px;
    margin: 0 auto;

    & button {
      display: block;
      background-color: transparent;
      outline: none;
      border: none;
    }

    & label {
      display: flex;
      font-size: 12px;
      color: #2d4077;
      text-align: center;
      margin-bottom: 2rem;

      & input {
        display: block;
        margin-right: .5rem;
      }
    }

    & input {
      display: block;
      border: none;
      border-bottom: 1px solid #2d4077;
      margin-bottom: 2rem;
      padding: 0.5rem 0;
      color: #2d4077;
      font-size: 20px;

      &:focus {
        outline: none;
        border: none;
        border-bottom: 2px solid #2d4077;
      }
    }

    & select {
      display: block;
      border: none;
      margin-bottom: 2rem;
      padding: 0.5rem 0;
      color: #2d4077;
      font-size: 20px;

      &:focus {
        outline: none;
        border: none;
      }
    }
  }
`;
