import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import styled from "styled-components";

export default ({ children, justify }) => {
  const data = useStaticQuery(graphql`
    query {
      buttom: file(name: { eq: "buttom" }) {
        childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
      companion: file(name: { eq: "companion" }) {
        childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
  `);

  return (
    <Button fluid={data.buttom.childCloudinaryAsset.fluid} textAlign={justify}>
      <Companion companion={data.companion.childCloudinaryAsset.fluid.src} />
      {children}
    </Button>
  );
};

const Button = styled(BackgroundImage)`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.textAlign};
  padding-left: 15px;
  width: 310px;
  height: 78px;
  font-size: 18px;
  position: relative;
  color: #fff;
  font-weight: bold;
  transition: all 0.2s;
  cursor: pointer;
  margin: 0 auto;

  &:hover {
    transform: scale(1.1);
  }
`;
const Companion = styled.span`
  display: block;
  width: 74px;
  height: 80px;
  background-image: url("${(props) => props.companion}");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  right: -20px;
  bottom: 0;
`;
