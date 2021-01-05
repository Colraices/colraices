import React, { useState } from "react";
import "./styles.css";
import styled from "styled-components";

import Header from "../components/header";
import Aside from "../components/aside";
import Footer from "../components/footer";
import Form from "../components/form";

// markup
const Layout = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Aside />
      <ButtonContainer>
        <ButtomForm onClick={openModal}>Contactanos</ButtomForm>
      </ButtonContainer>
      <Form showModal={showModal} setShowModal={setShowModal} />
      <Footer />
    </>
  );
};

export default Layout;

const Main = styled.main`
  margin-top: 80px;
`;
const ButtonContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  display: flex;
  align-items: center;
  width: 76px;
`;

const ButtomForm = styled.button`
  background: #2d4077 0% 0% no-repeat padding-box;
  font-size: 19px;
  color: #fff;
  text-transform: uppercase;
  display: inline-block;
  height: 76px;
  border: none;
  border-radius: 0px 0px 10px 10px;
  transform: translateX(-61px) rotate(270deg);
  padding: 0 1.5rem;
  margin: 0;
  font-weight: 500;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
