import React from "react";

export default function CharacterCard({character}) {
  const {name, gender, species, status} = character;
  return (
    <div>
      <h2>{name}</h2>
      <p>Gender: {gender} <br/>Species: {species} <br/>Status: {status} </p>
    </div>
  );
}
