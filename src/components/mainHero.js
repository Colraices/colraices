import * as React from "react";
import styled from "styled-components";
import BackgroundImage from "../components/backgroundImage";

// markup
const MainHero = () => {
  return (
    <StyledBackgroundSection>
      <BackgroundImage name="banner_home">
        <div className="container">
          <div className="box">
            <h1>
              <span>Trabajamos por</span>
              <span>tu meta de</span>
              <span>comprar casa en</span>
              <span>Colombia</span>
            </h1>
          </div>
        </div>
      </BackgroundImage>
    </StyledBackgroundSection>
  );
};

const StyledBackgroundSection = styled.div`
  & > div {
    height: calc(100vh - 80px);

    &::after {
      background-attachment: fixed;
    }
  
  .container {
    width: 100%;
    height: 100%;
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .box{
    width: 100%;
    max-width: 623px;
    border-top: 3px solid #F5DD05;
    border-bottom: 3px solid #F5DD05;
    color: #fff;

    & h1 span {
      display: block;
      text-align: center;
      font-size: 75px;
      text-shadow: 3px 3px 6px #0000006B;

      &:last-child {
        font-size: 130px;
      }
    }
  }
`;

export default MainHero;
