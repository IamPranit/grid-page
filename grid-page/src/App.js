import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import GridComponent from "./components/layout/GridComponent";

const App = () => {
  const [state] = useState({
    cards: [
      {
        title: "Blog Title",
        id: "001",
        date: "03 december 13",
        comments: 2,
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper tincidunt tincidunt.",
      },
      {
        title: "Blog Title",
        id: "002",
        date: "03 december 13",
        comments: 2,
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper tincidunt tincidunt.",
      },
      {
        title: "Blog Title",
        id: "003",
        date: "03 december 13",
        comments: 2,
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper tincidunt tincidunt.",
      },
      {
        title: "Blog Title",
        id: "004",
        date: "03 december 13",
        comments: 2,
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper tincidunt tincidunt.",
      },
      {
        title: "Blog Title",
        id: "005",
        date: "03 december 13",
        comments: 2,
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper tincidunt tincidunt.",
      },
      {
        title: "Blog Title",
        id: "006",
        date: "03 december 13",
        comments: 2,
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper tincidunt tincidunt.",
      },
    ],
  });

  return (
    <div className="App">
      <Container>
        <header className="App-header">Grid Page</header>
      </Container>
      <Container>
        <GridComponent cardData={state} />
      </Container>
    </div>
  );
};

export default App;
