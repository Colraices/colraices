import styled from "styled-components";

export const SectionSubTitle = styled.h2`
  display: block;
  width: 100%;
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "816px")};
  margin: 0 auto;
  text-align: center;
  font-size: 42px;
  color: #2d4077;
  padding: 4rem 0;
`;

export const ImageChange = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    width: ${(props) => (props.w ? props.w : "200px")};
  }
  & > div:last-child {
    position: absolute;
    background-color: #f6f6f6;
    transition: all 0.2s;
    &:hover {
      opacity: 0;
    }
  }
`;

export const Separator = styled.div`
  background: #caa55e 0% 0% no-repeat padding-box;
  width: 50%;
  height: 7px;
  border-radius: 8px;
  margin: ${(props) => (props.margin ? props.margin : "0 auto")};
  position: ${(props) => (props.position ? props.position : "static")};
  top: ${(props) => (props.top ? props.top : "none")};
  bottom: ${(props) => (props.bottom ? props.bottom : "none")};
  right: ${(props) => (props.right ? props.right : "none")};
  left: ${(props) => (props.left ? props.left : "none")};
`;

export const CardMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  max-width: 400px;

  & svg {
    width: 100px;
    color: #caa55e;
    margin-bottom: 1rem;
  }

  & h3 {
    color: #2d4077;
    font-size: 35px;
    margin-bottom: 1rem;
  }
  & p {
    color: #707070;
    font-size: 20px;
    line-height: 1.25;
    text-align: center;
  }
`;

