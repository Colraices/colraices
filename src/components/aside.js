import * as React from "react";
import styled from "styled-components";

import { Faceboock, Instagram, Youtube, Whatsapp } from "../utils/icons";

const Aside = () => {
  return (
    <Container>
      <List>
        <Item>
          <Link
            href="https://www.facebook.com/colraices/"
            rel="noopener nofollow"
            target="_blanck"
          >
            <Faceboock wh="h-6 w-6" />
          </Link>
        </Item>
        <Item>
          <Link
            href="https://www.instagram.com/colraices/?hl=es-la"
            rel="noopener nofollow"
            target="_blanck"
          >
            <Instagram wh="h-6 w-6" />
          </Link>
        </Item>
        <Item>
          <Link
            href="https://www.youtube.com/channel/UCiBystYzqzabHULJWwgAjnw"
            rel="noopener nofollow"
            target="_blanck"
          >
            <Youtube wh="h-6 w-6" />
          </Link>
        </Item>
        <Item>
          <Link
            href="www.faceboock.com"
            rel="noopener nofollow"
            target="_blanck"
          >
            <Whatsapp wh="h-6 w-6" />
          </Link>
        </Item>
      </List>
    </Container>
  );
};

export default Aside;

const Container = styled.aside`
  position: fixed;
  z-index: 40;
  right: 20px;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
`;
const Item = styled.li`
  display: inline-block;
`;

const Link = styled.a`
  & svg {
    color: #fff;
    filter: drop-shadow(0px 0px 3px #000);
    width: 35px;
    height: 35px;
  }
`;
