import * as React from "react";
import styled from "styled-components";

import BackgroundImage from "../components/backgroundImage";
import Image from "../components/image";

const Nosotros = () => {
  return (
    <div>
      {/* Banner */}
      <Banner>
        <BackgroundImage name="nosotros__banner">
          <Container>
            <Info>
              <h1>Nosotros</h1>
              <p className="text--1">LLevamos más de 16 años</p>
              <p className="text--2">
                ayudando a los Colombianos en el exterior
              </p>
              <p className="text--3">a cumplir su meta de</p>
              <p className="text--4">comprar casa en Colombia</p>
            </Info>
          </Container>
        </BackgroundImage>
      </Banner>
      {/* Section 1 */}
      <Section1>
        <MainContainer>
          <Title>
            Nuestra historia inicio<span>hace 16 años</span>
          </Title>
          <Descriptions>
            <span>Con el único objetivo de que tu vida</span> se más fácil y tu
            experiencia sea la mejor
          </Descriptions>
          <div className="grid__container">
            <div>
              <Text>
                En 2004 cuando Colraíces vio por primera vez la luz y se entrego
                a sus compatriotas radicados en Madrid España ya tenia claro
                cual era su objetivo y que necesitaba para lograrlo del mejor
                modo posible, es por eso que desde comienzo contamos con los
                mejores aliados financieros que se sumaron a este gran sueño de
                ayudar a todos los colombianos en el exterior a cumplir su meta
                de comprar casa en Colombia.
              </Text>
            </div>
            <div>
              <Text>
                Entidades financieras como Bancolombia y BBVA fueron los
                primeros en creer en nosotros y a su lado se presentaron
                constructoras e inmobiliarias como con un portafolio gigante que
                dio muchas opciones desde sus inicios como Constructora Bolívar,
                camú, jaramillomora y 15 aliados más que nos permitieron salir
                con una oferta de mas de 50 proyectos inmobiliarios al servicio
                de todos los Colombianos en el exterior.
              </Text>
            </div>
          </div>
          <Image
            name="nosotros__section--1"
            description="nuestra historia"
            className="image"
          />
          <Text align="center">
            Estas alianzas y nuestro deseo infinito de querer que todos los
            Colombianos en el exterior puedan comprar su casa nos permitieron
            iniciar con un gran portafolio de servicios.
          </Text>
        </MainContainer>
      </Section1>
      {/* Section 2 */}
      <Section2>
        <MainContainer>
          <div className="grid__container">
            <div className="grid__item">
              <div>
                <Title align="left">
                  <span>2009</span> Cumplimos <br /> 5 años
                </Title>
              </div>
            </div>
            <div className="grid__item">
              <Image
                name="nosotros__section2"
                description="Cumplimos 5 años"
                className="image"
              />
            </div>
          </div>
          <Text>
            La prueba inicial ha sido superada! y tras 5 años en el mercado
            muchas cosas han cambiado, nuestro centro de operaciones principal
            ahora esta en Bogotá Colombia, seguimos en España, ahora estamos en
            3 paises mas y tenemos Colombianos felices y estrenando casa en más
            de 8 paises diferentes, ya son más de 400 familias y no es lo único,
            pues a nuestro equipo de aliados se ha sumado Davivienda y Giros y
            Finanzas, convirtiéndonos en el único bróker en contar con un
            portafolio financiero tan amplio{" "}
          </Text>
        </MainContainer>
      </Section2>
      {/* Section 3 */}
      <Section3>
        <MainContainer>
          <div className="grid__container">
            <div className="grid__item">
              <Image
                name="nosotros__section3"
                description="Cumplimos 5 años"
                className="image"
              />
            </div>
            <div className="grid__item">
              <div>
                <Title align="left">
                  <span>2014</span> Cumplimos <br /> 10 años
                </Title>
              </div>
            </div>
          </div>
          <Text>
            Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce
            vieux whisky au juge blond qui fume sur son île intérieure, à côté
            de l"alcôve ovoïde, où les bûches se consument dans l"âtre, ce qui
            lui permet de penser à la cænogenèse de l"être dont il est question
            dans la cause ambiguë entendue à Moÿ, dans un capharnaüm qui,
            pense-t-il, diminue çà et là la qualité de son œuvre. Prouvez, beau
            juge, que le fameux sandwich au yak tue. L"île exiguë, Où l"obèse
            jury mûr Fête l"haï volapük, Âne ex æquo au whist, Ôtez ce vœu déçu.
            Vieux pelage…
          </Text>
        </MainContainer>
      </Section3>
      {/* Section 4 */}
      <Section4>
        <MainContainer>
          <Title>
            <span>2020</span> Una nueva realidad
          </Title>
          <Descriptions>
            <span>Llevamos más de 15 años en el mercado</span> y 3845 familias
            han depositado su confianza en nosotros
          </Descriptions>
          <div className="grid__container">
            <div>
              <Text>
                Iniciamos el año como todos los anteriores, ampliando nuestro
                equipo humano al rededor del mundo, tenemos grandes proyectos en
                marcha para seguir al lado de nuestros compatriotas y de hecho,
                este año planemos estar mucho mas cerca, mucho más presentes y
                todo va sobre ruedas cuando sin aviso una noticia conmociono al
                mundo, un enemigo silencioso ha recluido a la humanidad en su
                casa y a muchos lejos, muy lejos de ella...
              </Text>
            </div>
            <div>
              <Text>
                Los planes de todos entraron en receso, no existe un panorama
                claro delante de nadie, pero nosotros, nosotros somos
                Colombianos y los colombianos no vamos pa atrás ni pa echar
                impulso, eso atrás asustastan decían nuestras abuenas y nosotros
                como en los últimos 16 años de servicio tenemos que seguir
                siendo la fuera de todos los compatriotas que han creido en
                nosotros y han depositado sus sueños con la certeza que les
                ayudaremos
              </Text>
            </div>
          </div>
          <Image
            name="nosotros__section4"
            description="2020 una nueva realidad"
            className="image"
          />
          <Text>
            Por eso es que en vez de esperar que iba a pasar, nosotros de
            inmediato nos fuimos a nuestros hogares cuidando de nuestra familia
            y misteriosamente haciendo a Colraices más unido que nunca, más
            tecnológico, mas cercano a todos los compatriotas en el mundo, ahora
            trabajamos desde casa y entendemos mejor ese sentimiento de estar en
            familia y la importancia de tener casa en Colombia, asi que
            relanzamos una de nuestras iniciativas convirtiéndola en una marca
            de Colraices, en el 2020 Vitrina Colombia se reinventa siendo la
            nueva ventana tecnológica y humana para comprar casa en Colombia,
            ofreciendo beneficios como xxx
          </Text>
        </MainContainer>
      </Section4>
      {/* Section 5 */}
      <Section5>
        <MainContainer>
          <h2>En la actualidad llevamos</h2>
          <div className="grid__container">
            <div className="grid__item">
              <div className="count">
                70<span>k</span>
              </div>
              <h3>
                Familias colombianas <span>Asesoradas</span>
              </h3>
            </div>
            <div className="grid__item">
              <div className="count">
                5,8<span>k</span>
              </div>
              <h3>
                Casas en todo Colombia
                <span>Entregadas</span>
              </h3>
            </div>
            <div className="grid__item">
              <div className="count">13</div>
              <h3>
                Países con atención
                <span>Permanente</span>
              </h3>
            </div>
          </div>
          <Text align="center">
            ¡Y seguimos mejorando todos nuestros canales para estar cada vez más
            cerca!
          </Text>
        </MainContainer>
      </Section5>
      {/* Section 6 */}
      <Section6>
        <div className="info">
          <div>
            <h2>
              Titulo <span>del video</span>
            </h2>
            <p>
              Aquí va un texto complementario para el video en el que hablemos
              algo de la corporación enfocado al trabajo social, o interés en la
              ayuda al cumplimiento de los sueños de los colombianos en el
              exterior que quieren comprar casa en Colombia o de algo solo es un
              ejemplo o sugerencia.
            </p>
          </div>
        </div>
        <div>
          <iframe
            width="863"
            height="753"
            src="https://www.youtube.com/embed/GGsWd2y_HVY"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </Section6>
    </div>
  );
};

export default Nosotros;

const Banner = styled.div`
  & > div {
    height: 555px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;
const MainContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
`;

const Info = styled.div`
  width: 100%;
  max-width: 500px;
  margin-right: 5rem;

  margin-left: auto;
  text-align: center;

  & h1 {
    font-size: 85px;
    font-weight: bold;
    color: #caa55e;
    text-transform: uppercase;
    margin: 0 0 1rem;
  }
  & p {
    margin: 0;
    color: #fff;
    font-size: 35px;
    font-weight: bold;
    text-align: center;
  }
  & .text--2 {
    font-size: 21px;
    color: #caa55e;
  }
`;

const Title = styled.h2`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 724px;
  color: #2d4077;
  font-size: 65px;
  text-align: ${(props) => (props.align ? props.align : "center")};
  font-weight: bold;
  margin: 0 auto;
  padding: 2rem 0;

  & span {
    color: #caa55e;
  }
`;

const Descriptions = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #707070;
  font-size: 35px;
  margin-bottom: 3rem;
  font-weight: 500;
`;

const Text = styled.p`
  line-height: 1.37;
  color: #707070;
  font-size: 25px;
  margin: ${(props) => (props.margin ? props.margin : "0")};
  text-align: ${(props) => (props.align ? props.align : "left")};
`;
// Sections

const Section1 = styled.section`
  background-color: #f6f6f6;
  padding-bottom: 3rem;

  & .grid__container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 4rem;
  }

  & .image {
    margin: 2rem 0;
  }
`;

const Section2 = styled.section`
  padding-bottom: 3rem;

  & .grid__container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 4rem 0;

    & .grid__item:first-of-type {
      display: flex;
      align-items: center;
      padding-left: 3rem;
    }
  }
`;

const Section3 = styled.section`
  padding-bottom: 3rem;
  background-color: #f6f6f6;

  & .grid__container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 4rem 0;

    & .grid__item:last-of-type {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

const Section4 = styled.section`
  padding-bottom: 3rem;

  & .grid__container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 4rem;
  }

  & .image {
    margin: 2rem 0;
  }
`;

const Section5 = styled.section`
  background-color: #f6f6f6;
  padding-bottom: 2rem;

  & > div > h2 {
    font-size: 35px;
    color: #2d4077;
    text-align: center;
    padding: 2rem 0;
  }

  & .grid__container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 2rem;

    & .grid__item {
      display: flex;
      flex-direction: column;
      align-items: center;

      & .count {
        font-size: 97px;
        color: #caa55e;
        font-weight: bold;

        & span {
          font-size: 50px;
        }
      }

      & h3 {
        display: flex;
        flex-direction: column;
        text-align: center;
        font-size: 20px;
        font-weight: 500;
        color: #2d4077;

        & span {
          font-weight: bold;
          font-size: 35px;
        }
      }
    }
  }
`;
const Section6 = styled.section`
  display: flex;
  justify-content: flex-end;
  margin: 4rem 0;

  & iframe {
    margin: 0;
  }

  & .info {
    background-color: #f6f6f6;
    width: 100%;
    margin: 4rem 0;

    & > div {
      width: 100%;
      height: 100%;
      max-width: 500px;
      margin-left: auto;
      margin-right: 4rem;
      display: flex;
      flex-direction: column;
      justify-content: center;

      & h2 {
        width: fit-content;
        margin: 0 auto 2rem;
        color: #caa55e;
        font-weight: bold;
        font-size: 80px;
        display: flex;
        flex-direction: column;
        text-align: right;
        line-height: 1;

        & span {
          font-size: 40px;
        }
      }

      & p {
        font-size: 20px;
        color: #707070;
        line-height: 1.27;
        text-align: center;
      }
    }
  }
`;
