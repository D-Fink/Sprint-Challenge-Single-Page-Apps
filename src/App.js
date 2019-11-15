import React from "react";
import {Route, Link} from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import CharacterCard from "./components/CharacterCard";


export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage}/>
      <Route path="/characters" component={CharacterList}/>
      <Route path="/characters/:id" component={CharacterCard}/>
      <div>
      <Link to={"/characters"}>Character List</Link>
    </div>
    </main>
  );
}
