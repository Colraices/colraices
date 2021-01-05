import * as React from "react";
import styled from "styled-components";
import Image from "../components/image";
import { Link } from "gatsby";

import Menu from "./menu";

// markup
const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <Logo to="/">
          <Image name="logo" description="colraices" className="logo" />
        </Logo>
        <Menu />
      </Container>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 50;
`;

const Container = styled.div`
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
