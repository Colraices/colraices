import * as React from "react";
import styled from "styled-components";
import Image from "../components/image";

// markup
const Avatar = ({ name }) => {
  return (
    <Container>
      <Image name={name} />
    </Container>
  );
};

export default Avatar;

const Container = styled.div`
  & > div {
    width: 284px;
    height: 284px;
    border-radius: 50%;
    border: 20px solid #C9A45E;
  }
`;
