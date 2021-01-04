import * as React from "react";
import styled from "styled-components";

import { SearchIcon } from "../utils/icons";

// markup
const Search = () => {
  return (
    <SearchContainer>
      <div className="container">
        <h2>¿Tienes alguna inquietud sobre como comprar casa en Colombia?</h2>
        <form>
          <input
            type="Pregúntanos lo que quieres saber"
            placeholder="Pregúntanos lo que quieres saber"
            required
          />
          <button type="submit">
            <SearchIcon customize="search__icon" />
          </button>
        </form>
        <p>
          Prueba y descubre el mejor buscador de crédito y vivienda para
          colombianos en el exterior.
        </p>
      </div>
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  background-color: #f6f6f6;
  display: flex;
  justify-content: center;
  align-items: center;

  & .container {
    width: 100%;
    max-width: 1032px;
    background-color: #fff;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 32px;
    margin: 2rem 0;
    padding: 1.5rem 0;
  }
  & h2 {
    color: #caa55e;
    font-size: 25px;
    text-align: center;
    margin-bottom: 1.5rem;
  }
  & form {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    max-width: 857px;
    height: 43px;
    margin: 0 auto 1.5rem;

    & input {
      display: block;
      width: 100%;
      height: 100%;
      background: #fafafa 0% 0% no-repeat padding-box;
      box-shadow: 4px 4px 3px #00000040;
      border: 1px solid #707070;
      border-radius: 15px;
      padding: 0 2rem 0 1rem;

      &:focus {
        outline: 0;
      }
    }
    & button {
      position: absolute;
      right: 0;
      display: block;
      background-color: red;
      height: 100%;
      padding: 0 1rem 0 0;
      border-radius: 0 15px 15px 0;
      border: none;
      background-color: transparent;
      &:focus {
        outline: 0;
      }
    }

    & .search__icon {
      width: 30px;
      height: 30px;
      color: #898585;
    }
  }
  & p {
    display: block;
    text-align: center;
    font-size: 20px;
    width: 100%;
    max-width: 600px;
    color: #707070;
    margin: 0 auto;
  }
`;

export default Search;
