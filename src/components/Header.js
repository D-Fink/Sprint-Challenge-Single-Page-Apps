import React from "react";
import {Link} from "react-router-dom";

export default function Header() {
  return (
    <header className="ui centered">
      <Link to={"/"}>Home</Link>
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
    </header>
  );
}
