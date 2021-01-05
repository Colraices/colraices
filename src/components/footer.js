import * as React from "react";
import styled from "styled-components";
import Image from "../components/image";
import { Link } from "gatsby";
import { Location } from "../utils/icons";

import { Faceboock2, Youtube, Instagram, Linkedin } from "../utils/icons";

// markup
const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <div>
          <MapContainer>
            <Image className="map__image" name="map__footer" />
            <MapCity className="city__chile">
              <div className="map__icon city" id="mapIcon">
                <Location customize="map__svg" />
              </div>
              <MapInfo>
                <p className="title">Santiago de Chile </p>
                <p className="phone">+56 2323109547</p>
                <p className="plus">info@colraices.com</p>
                <b className="plus">8am a 5:30pm</b>
              </MapInfo>
            </MapCity>
            <MapCity className="city__bogota">
              <div className="map__icon city" id="mapIcon">
                <Location customize="map__svg" />
              </div>
              <MapInfo>
                <p className="title">Colombia - Bogota</p>
                <p className="phone">+57 13288939</p>
                <p className="plus">Calle 100 # 13 - 41 of:102</p>
                <p className="plus">info@colraices.com</p>
                <b className="plus">8am a 5:30pm</b>
              </MapInfo>
            </MapCity>
            <MapCity className="city__newJ">
              <div className="map__icon city" id="mapIcon">
                <Location customize="map__svg" />
              </div>
              <MapInfo>
                <p className="title">New Jersey</p>
                <p className="phone">+1 (908) 423-9896</p>
                <p className="plus">info@colraices.com</p>
                <b className="plus">8am a 5:30pm</b>
              </MapInfo>
            </MapCity>
            <MapCity className="city__francia">
              <div className="map__icon city" id="mapIcon">
                <Location customize="map__svg" />
              </div>
              <MapInfo>
                <p className="title">Francia</p>
                <p className="phone">+34 (91) 0602824</p>
                <p className="plus">info@colraices.com</p>
                <b className="plus">8am a 5:30pm</b>
              </MapInfo>
            </MapCity>
            <MapCity className="city__inglaterra ">
              <div className="map__icon city" id="mapIcon">
                <Location customize="map__svg" />
              </div>
              <MapInfo>
                <p className="title">Inglaterra</p>
                <p className="phone">+34 (91) 0602824</p>
                <p className="plus">info@colraices.com</p>
                <b className="plus">8am a 5:30pm</b>
              </MapInfo>
            </MapCity>
            <MapCity className="city__españa ">
              <div className="map__icon city" id="mapIcon">
                <Location customize="map__svg" />
              </div>
              <MapInfo>
                <p className="title">España - Barcelona</p>
                <p className="phone">+34 (91) 0602824</p>
                <p className="plus">(Madrid) Avenida del Mediterraneo # 5</p>
                <p className="plus">info@colraices.com</p>
                <b className="plus">9am a las 2pm y de 4pm a 8pm</b>
              </MapInfo>
            </MapCity>
          </MapContainer>
        </div>
        <Info>
          <div className="info__item--1">
            <p className="mb-4">
              <Link
                to="section1"
                className="inline-block mx-2 cursor-pointer transition duration-200 hover:opacity-75"
              >
                Crédito Hipotecario
              </Link>{" "}
              -{" "}
              <Link
                to="section3"
                className="inline-block mx-2 cursor-pointer transition duration-200 hover:opacity-75"
              >
                Servicios Inmobiliarios
              </Link>
            </p>
            <p>
              <Link
                to="section5"
                className="inline-block mx-2 cursor-pointer transition duration-200 hover:opacity-75"
              >
                Cuenta de ahorros
              </Link>{" "}
              -{" "}
              <Link
                to="section6"
                className="inline-block mx-2 cursor-pointer transition duration-200 hover:opacity-75"
              >
                Monetización
              </Link>{" "}
              -{" "}
              <Link
                to="section7"
                className="inline-block mx-2 cursor-pointer transition duration-200 hover:opacity-75"
              >
                Nosotros
              </Link>
            </p>
          </div>
          <div className="info__item--2">
            <a href="" target="_blanck" rel="noopener nofollow" className="">
              <Faceboock2 />
            </a>
            <a
              href=""
              target="_blanck"
              rel="noopener nofollow"
              className="border border-white rounded-full cursor-pointer p-2 mr-4 hover:bg-white hover:text-secondary duration-200 transition-all"
            >
              <Instagram />
            </a>
            <a
              href=""
              target="_blanck"
              rel="noopener nofollow"
              className="border border-white rounded-full cursor-pointer p-2 mr-4 hover:bg-white hover:text-secondary duration-200 transition-all"
            >
              <Linkedin />
            </a>
            <a
              href=""
              target="_blanck"
              rel="noopener nofollow"
              className="border border-white rounded-full cursor-pointer p-2 hover:bg-white hover:text-secondary duration-200 transition-all"
            >
              <Youtube />
            </a>
          </div>
          <div className="info__item--3">
            <p>
              <b>Colraices</b> - Oficina Principal - Bogotá - Colombia
            </p>
            <p>Calle 100 # 13 - 41 of 102 - (+571) 213 65487</p>
          </div>
        </Info>
      </Container>
      <Description>
        Politica de privacidad - mapa del sitio - 2020 Momentum
      </Description>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background-color: #2d4077;
  padding: 5rem 0 1rem;
  position: relative;
  z-index: 50;
`;

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1300px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Info = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & .info__item {
    &--1,
    &--2,
    &--3 {
      color: #fff;
      text-align: center;
    }
    &--1 {
      & p {
        margin: 0 0 1rem;
      }
    }
    &--2 {
      display: flex;
      justify-content: space-between;
      width: 240px;
      margin: 0 auto;

      /* Remplazar por link */
      & a {
        border: 1px solid #fff;
        border-radius: 50%;
        cursor: pointer;
        padding: 0.5rem;
        width: 45px;
        height: 45px;
        transition: all 0.3s;
        &:hover {
            border: 1px solid #2D4077;
            color: #2D4077;
            background-color: #fff;
        }
      }

      & svg {
        width: 100%;
        height: 100%;
      }
    }
    &--3 {
      p {
        margin: 0 0 1rem;
      }
    }
  }

  & a {
    text-decoration: none;
    color: currentColor;
  }
`;

const MapContainer = styled.div`
  position: relative;
  width: 715px;
  height: 285px;

  & .map__image {
    position: relative;

    & img {
      margin: 0;
    }
  }

  & .city__chile {
    transform: translate(165px, -75px);
  }
  & .city__bogota {
    transform: translate(150px, -140px);
  }
  & .city__newJ {
    transform: translate(115px, -195px);
  }
  & .city__francia {
    transform: translate(280px, -235px);
  }
  & .city__inglaterra {
    transform: translate(235px, -255px);
  }
  & .city__españa {
    transform: translate(220px, -230px);
  }
`;
const MapCity = styled.div`
  display: inline-block;
  width: 22px;
  height: 30px;
  overflow: hidden;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 5px;
  z-index: 50;

  &:hover {
    overflow: visible;
    & > div > .map__svg {
      transform: scale(1.5);
    }
  }

  & .map__icon {
    position: relative;
    &:hover {
      &::before {
        display: block;
      }
      & + div {
        opacity: 1;
        visibility: visible;
      }
      &:hover {
        & > .map__svg {
          transform: scale(1.5);
        }
      }
    }
    &::before {
      content: "";
      display: none;
      position: absolute;
      top: 0;
      z-index: 50;
      width: 50px;
      height: 50px;
      transform: translate(-20px, -10px);
    }
    & .map__svg {
      width: 12px;
      position: absolute;
      color: #ffbb54;
      z-index: 10;
      transition: all 0.3s;
    }
  }
`;
const MapInfo = styled.div`
  width: fit-content;
  position: absolute;
  min-width: 200px;
  background-color: #fff;
  border-radius: 5px;
  transform: translate(1rem, -2rem);
  padding: 0.5rem 1rem;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;

  &:hover {
    opacity: 1;
    visibility: visible;
  }

  & p {
    margin: 0;
  }

  & .title {
    font-size: 18px;
    color: #caa55e;
    text-align: center;
    font-weight: bold;
    margin: 0.5rem 0;
  }

  & .phone,
  & .plus {
    display: block;
    color: #707070;
    font-size: 14px;
    text-align: center;
    margin: 0 0 0.2rem;
  }
`;

const Description = styled.p`
  text-align: center;
  font-size: 18px;
  color: #fff;
  margin-top: 2rem;
  margin-bottom: 0;
`;
