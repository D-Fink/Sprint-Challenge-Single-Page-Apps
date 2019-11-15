import React, { useState, useEffect } from "react";

export default function SearchForm(props) {
 
  const [searchTerm, setSearchTerm] = useState("");

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = props.characters.filter(character =>
      character.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
  }, [searchTerm]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  }
  return (
    <section className="search-form">
     <div>
       <form>
         <label htmlFor="name">Search: </label>
         <input id="name" type="text" name="textfield" placeholder="Search" onChange={handleChange} value={searchTerm}/>
       </form>
       <div>
         <ul>
           {searchResults.map(character => (
             <li key={character}>{character}</li>
           ))}
         </ul>
       </div>
     </div>
    </section>
  );
}
