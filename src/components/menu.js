import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby"

const links = [
  {
    name: "Nosotros",
    url: "/nosotros",
  },
  {
    name: "Nuestros Servicios",
    url: "/nuestros-servicios",
  },
  {
    name: "Crédito de vivienda",
    url: "/credito-de-vivienda",
  },
  {
    name: "Portal cliente",
    url: "/portal-cliente",
  },
  {
    name: "Portal Inmobiliario",
    url: "/portal-inmobiliario",
  },
  {
    name: "Blog",
    url: "/blog",
  },
  {
    name: "Franquicias",
    url: "/franquicias",
  },
];

// markup
const Menu = () => {
  return (
    <Navigation>
      <ul>
        {links.map((link, i) => (
          <li key={link.name + i}>
            <Link to={link.url}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </Navigation>
  );
};

export default Menu;

const Navigation = styled.nav`
  height: 100%;

  & ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
    height: 100%;
  }

  & li {
    display: block;
    height: 100%;
    font-size: 18px;
    margin: 0;
  }

  & a {
    text-decoration: none;
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
    color: #707070;
    transition: all 0.2s;

    &:hover {
      background-color: #2d4077;
      color: #fff;
    }
  }
`;
