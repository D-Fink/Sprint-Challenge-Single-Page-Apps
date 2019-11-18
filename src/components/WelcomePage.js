import React from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components';

const ListLink = styled(Link)`
  text-align: center;
  font-size: 30px;
  color: black;
  margin-left: 40%;
`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
      <ListLink to={"/characters"}>Character List</ListLink>
    </section>
  );
}
