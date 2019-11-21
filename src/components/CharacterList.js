import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from 'styled-components';

const CharacterContainer = styled.div`
  display:flex;
  justify-content:space-around;
  flex-wrap:wrap;
`;
const Title = styled.div`
width: 40%;
`;


export default function CharacterList() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
      axios
      .get(`https://rickandmortyapi.com/api/character`)
      .then(response => {
        console.log(response.data.results)
        const characters = response.data.results.filter(character => character.name.toLowerCase().includes(query.toLowerCase()))
        setData(characters);

      })
      .catch(error => {
        console.error('Wubba lubba dub dub, you made an error.', error);
      })
  }, [query]);

  const handleChange = event => {
    setQuery(event.target.value);
  }

  return (
    <>
    <section className="search-form">
     <div>
       <form>
         <label htmlFor="name">Search: </label>
         <input type="text" name="name" placeholder="Search" onChange={handleChange} value={query}/>
       </form>
     </div>
    </section>
    <section className="character-list">
      <CharacterContainer>
        {data.map(data => {
          return (
            <Title>
                <img key={data.name} src={data.image}/>
                <h2 key={data.id}>{data.name}</h2>
            </Title>
          );
        })}
        </CharacterContainer>
    </section>
    </>
  );
}
