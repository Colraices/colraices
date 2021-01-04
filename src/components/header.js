import * as React from "react";
import styled from "styled-components";
import Image from "../components/image";
import { Link } from "gatsby"


import Menu from "./menu";

// markup
const Header = () => {
  return (
    <Container>
      <Logo to="/">
        <Image name="logo" description="colraices" className="logo" />
      </Logo>
      <Menu />
    </Container>
  );
};

export default Header;

const Container = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 100%;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  align-items: center;
  }
`;

const Logo = styled(Link)`
  position: absolute;
  left: 0;
  margin-left: 1.5rem;

  & div {
    height: auto;
    width: 238px;
  }
`;
