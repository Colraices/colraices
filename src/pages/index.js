import * as React from "react";

import MainHero from "../components/mainHero";
import Search from "../components/search";
import SectionInfo from "../components/sectionInfo";
import {
  SectionSubTitle,
  ImageChange,
  Separator,
  CardMain,
} from "../style/components";
import { Coins, Dolar } from "../utils/icons";
import styled from "styled-components";
import Image from "../components/image";
import BackgroundImage from "../components/backgroundImage";
import Buttom from "../components/buttom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Testimonials from "../components/testimonials";

// markup
const IndexPage = () => {
  return (
    <>
      <MainHero />
      <Search />
      <SectionInfo />
      {/* Section 3 */}
      <Section3>
        <div className="container">
          <SectionSubTitle>
            Contamos con el respaldo de los mejores
          </SectionSubTitle>
          <div className="grid__container">
            <div className="grid__subcontainer">
              <ImageChange>
                <div>
                  <Image name="davivienda_hover" description="davivienda" />
                </div>
                <div>
                  <Image name="davivienda_normal" description="davivienda" />
                </div>
              </ImageChange>
              <ImageChange>
                <div>
                  <Image name="bancolombia_hover" description="bancolombia" />
                </div>
                <div>
                  <Image name="bancolombia_normal" description="bancolombia" />
                </div>
              </ImageChange>
              <ImageChange>
                <div>
                  <Image name="bbva_hover" description="bbva" />
                </div>
                <div>
                  <Image name="bbva_normal" description="bbva" />
                </div>
              </ImageChange>
              <ImageChange>
                <div>
                  <Image name="giros_hover" description="giros" />
                </div>
                <div>
                  <Image name="giros_normal" description="giros" />
                </div>
              </ImageChange>
            </div>
            <div className="grid__subcontainer">
              <ImageChange w={"150px"}>
                <div>
                  <Image name="prodesa_hover" description="prodesa" />
                </div>
                <div>
                  <Image name="prodesa_normal" description="prodesa" />
                </div>
              </ImageChange>
              <ImageChange w={"150px"}>
                <div>
                  <Image name="prodesa_hover" description="prodesa" />
                </div>
                <div>
                  <Image name="prodesa_normal" description="prodesa" />
                </div>
              </ImageChange>
              <ImageChange w={"150px"}>
                <div>
                  <Image name="camu_hover" description="camu" />
                </div>
                <div>
                  <Image name="camu_normal" description="camu" />
                </div>
              </ImageChange>
              <ImageChange w={"150px"}>
                <div>
                  <Image name="jaramillo_hover" description="jaramillo" />
                </div>
                <div>
                  <Image name="jaramillo_normal" description="jaramillo" />
                </div>
              </ImageChange>
            </div>
          </div>
          <p className="description">
            Descubre los productos y servicios que tenemos para cumplir tu meta
            de comprar casa en Colombia
          </p>
        </div>
      </Section3>
      {/* Section4 */}
      <Section4>
        <Separator />
        <SectionSubTitle maxWidth="768px">
          ¿Quieres ahorrar más fácil o <br />
          empezar a pagar tu casa en Colombia?
        </SectionSubTitle>
        <div className="card__container">
          <CardMain>
            <Dolar />
            <h3>Crédito</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
            </p>
            <Buttom>Solicita tu crédito hipotecario</Buttom>
          </CardMain>
          <CardMain>
            <Coins />
            <h3>Monetización</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
            </p>
            <Buttom justify="center">Empieza ahora</Buttom>
          </CardMain>
        </div>
        <Separator />
      </Section4>
      {/* Section5 */}
      <Section5>
        <div className="tab__container">
          <h2>
            Juntos <span>hacemos más</span>
          </h2>
          <Tabs>
            <TabList>
              <Tab>Franquicia</Tab>
              <Tab>Se le tiene</Tab>
            </TabList>

            <TabPanel>
              <p>
                Más de 5 millones de colombianos viven en el exterior, de
                encontrarse en un solo lugar serían la 2 da ciudad más grande de
                Colombia por número de habitantes y sus remesas cubrirían el
                presupuesto anual de Bogotá.
              </p>
              <p>
                ¿Qué te parece si creamos un espacio juntos en el que permitamos
                que todos los colombianos en el exterior se encuentren para
                cumplir sus metas?
              </p>
              <p>
                Queremos encontrarnos contigo y hacer grandes cosas juntos, si
                tú eres de los que crees que la unión hace la fuerza, unámonos
                en alguno de nuestros proyectos, creamos en Colombia y
                trabajemos por ella.
              </p>
            </TabPanel>
            <TabPanel>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </TabPanel>
          </Tabs>
          <Buttom justify="center">Pauta con nosotros</Buttom>
        </div>
        <div className="image__container">
          <div className="image__contain">
            <BackgroundImage name="franquicia_main"></BackgroundImage>
          </div>
        </div>
      </Section5>
      {/* Section6 */}
      <Section6>
        <SectionSubTitle>Testimonios</SectionSubTitle>
        <Testimonials />
      </Section6>
    </>
  );
};

const Section3 = styled.section`
  & .container {
    background-color: #f6f6f6;
  }

  & .grid__container {
    width: 100%;
    max-width: 1105px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    position: relative;
  }

  & .grid__subcontainer {
    &:last-of-type {
      border-left: 3px solid #caa55e;
      border-radius: 2px;
    }
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
  }

  & .description {
    width: 600px;
    text-align: center;
    font-size: 25px;
    color: #5e5e5e;
    margin: 0 auto;
    padding: 3rem 0;
  }
`;

const Section4 = styled.section`
  & .card__container {
    width: 100%;
    max-width: 1021px;
    margin: 3rem auto 5rem;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Section5 = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  & .tab__container {
    width: 100%;
    max-width: 615px;
    margin-top: 16rem;
    margin-right: 3rem;
    & > h2 {
      color: #caa55e;
      font-size: 80px;
      display: block;
      width: 100%;
      max-width: 324px;
      margin: auto;
      line-height: 0.5;
      text-align: center;
      & span {
        font-size: 40px;
        padding-left: 2rem;
      }
    }
  }
  & .react-tabs {
    margin-bottom: 4rem;
  }
  & .react-tabs__tab-list {
    border: none;
    display: flex;
    width: 400px;
    margin: 2rem auto;
    justify-content: space-between;

    & .react-tabs__tab {
      border: none;
      color: #8786a0;
      font-size: 20px;
      font-weight: bold;
    }

    & .react-tabs__tab--selected {
      color: #2d4077;
      border-bottom: 3px solid #caa55e;
    }
  }

  & .react-tabs__tab-panel {
    text-align: center;
    font-size: 20px;
    color: #707070;
    line-height: 1.27;
    font-family: "Segoe UI";
  }

  & .image__container {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 860px;
    padding: 7rem 0;

    &::before {
      content: "";
      display: block;
      width: calc(100% - 80px);
      height: 100%;
      background-color: #f6f6f6;
      position: absolute;
      top: 0;
      right: 0;
    }

    & .image__contain {
      width: 100%;
      height: 920px;
      z-index: 10;

      & div {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

const Section6 = styled.section``;

export default IndexPage;
