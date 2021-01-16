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
      <Buttom>
        <ButtomForm onClick={openModal}>Contactanos</ButtomForm>
      </Buttom>
      <Form showModal={showModal} setShowModal={setShowModal} />
      <Footer />
    </>
  );
};

export default Layout;

const Main = styled.main`
  margin-top: 80px;
`;
const Buttom = styled.aside`
  z-index: 40;
  width: 76px;
  height: 100%;
  min-height: 100vh;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
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
