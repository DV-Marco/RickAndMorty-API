import React, { Component } from "react";
import {
  Button,
  Card,
  CardContent,
  Avatar,
  Typography,
  withStyles
} from "@material-ui/core";
import data from "./../assets/data.json";
import "./../styles/datos.css";
import EditIcon from "@material-ui/icons/Edit";
import { FontAwesomeIcon } from "../../node_modules/@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const styles = (theme) => ({
  margin: {
    margin: theme.spacing(1)
  }
});

export class Datos extends Component {
  hola = () => {
    console.log("hola mundo");
  };

  state = {
    fav: { value: "star" }
  };

  selFav = () => {
    console.log("Favorito :D");

    const fav = { ...this.state.fav };

    if (fav.value == "star") {
      fav.value = "star_sel";
      this.setState({ fav });
    } else if (fav.value == "star_sel") {
      fav.value = "star";
      this.setState({ fav });
    }
  };

  componentDidMount() {
    const localFavs = localStorage.getItem(this.props.title);
    console.log(localFavs);
    if (localFavs) {
      this.setState({
        fav: JSON.parse(localFavs)
      });
    }
  }

  componentDidUpdate() {
    console.log(this.state.fav);
    localStorage.setItem(this.props.title, JSON.stringify(this.state.fav));
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="list" id="container">
        <FontAwesomeIcon
          onClick={this.selFav}
          className={this.state.fav.value}
          icon={faStar}
        ></FontAwesomeIcon>
        <h1 className="tipografia">
          {this.props.title}
          <p>&nbsp;</p>
          <Avatar className="icons" src={this.props.avatar} />
        </h1>
        <Card>
          <CardContent>
            <Typography variant="h6" component="h2">
              {this.props.content}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(Datos);
