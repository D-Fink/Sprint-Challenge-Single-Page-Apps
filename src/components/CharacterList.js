import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import styled from 'styled-components';
import SearchForm from './SearchForm';

const CharacterContainer = styled.div`
  display:flex;
  justify-content:space-around;
  flex-wrap:wrap;
`;
const Title = styled.div`
width: 40%;
`;


export default function CharacterList(props) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = () => {
      axios
      .get("https://rickandmortyapi.com/api/character")
      .then(response => {
        console.log(response.data.results)
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.error('Wubba lubba dub dub, you made an error.', error);
      })
    }
    getCharacters();
  }, []);

  return (
    <section className="character-list">
      <SearchForm {...props} CharacterList={CharacterList}></SearchForm>
      <CharacterContainer>{characters.map(character => (
        <Title>
          <Link to={`/characters/${character.id}`}>
            <h2 key={character.id}>{character.name}</h2>
          </Link>
        </Title>
      ))}</CharacterContainer>
    </section>
  );
}
