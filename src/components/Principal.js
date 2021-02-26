import React, { Component } from "react";
import Datos from "./Datos";
import { GridList, withStyles, Button } from "@material-ui/core";
import "./../styles/personas.css";

const styles = (theme) => ({
  margin: {
    margin: theme.spacing(1)
  }
});

const html = () => {
  return (
    <h1>Hola mundo</h1>
  )
}

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

  render() {
    return (
      <div id="root">
        <div>{html}
        </div>
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
