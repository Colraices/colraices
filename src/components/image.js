import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";

export default ({ name, description }) => {
  const data = useStaticQuery(graphql`
    query {
      icon: file(name: { eq: "icon" }) {
        childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
  `);

  return <Image fluid={data[name].childCloudinaryAsset.fluid} alt={description} />;
};
