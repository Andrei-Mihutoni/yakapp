import React, { useEffect, useState } from "react";

import { get } from "./modules/rest";
import Main from "./components/Main";
import './App.css';

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    get(setCards)
  }, []);

  return (
    <>
      <div className="App">
        <Nav />
        <Main cards={cards} />
      </div>
    </>
  );
}

function Nav() {
  const [items, setItems] = useState([
    "hi", "mom", "hotpink"
  ])
  function addItem() {
    //create a copy
    const nextState = items.concat("Dannie")

    setItems(nextState)
  }

  return (
    <nav className="Nav">
      <h2>Hi im nav </h2>
      {
        items.map((item, index) => <p key={index} >{item}</p>)
      }


      <button onClick={addItem}>Click me</button>
    </nav>
  )
}


export default App;
