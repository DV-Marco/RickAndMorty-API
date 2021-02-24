import React, { Component } from "react";
import Datos from "./Datos";
import { GridList, withStyles, Button } from "@material-ui/core";
import "./../styles/personas.css";

const styles = (theme) => ({
  margin: {
    margin: theme.spacing(1)
  }
});

export class Personas extends Component {
  state = {
    characters: []
  };

  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((character) => {
        this.setState({
          characters: character.results
        });
      });
  }

  myList = [
    {
      title: "Java",
      content: "Is Java",
      letter: "JV",
      color: "orange"
    },
    {
      title: "Python",
      content: "Is Python",
      letter: "Py",
      color: "blue"
    },
    {
      title: "JavaScript",
      content: "Is JavaScript",
      letter: "JS",
      color: "yellow"
    },
    {
      title: "Kotlin",
      content: "Is Kotlin",
      letter: "Kt",
      color: "blue"
    }
  ];

  render() {
    return (
      <div id="root">
        <GridList>
          {this.state.characters.map((char) => (
            <Datos
              avatar={char.image}
              key={char.id}
              content={char.status}
              title={char.name}
            />
          ))}
        </GridList>
      </div>
    );
  }
}

export default withStyles(styles)(Personas);
