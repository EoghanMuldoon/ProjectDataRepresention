import React from 'react';
import '../App.css';
import SearchGames from './SearchGames';
import Axios from 'axios';
import Button from 'react-bootstrap/Button';


class Search extends React.Component {


  state = {
    games: []
  };


  constructor() {
    super();
    this.findGame = this.findGame.bind(this);
  }





  findGame(e) {
    var one = document.getElementById("SearchBy").value;
    var two = document.getElementById("SearchTerm").value;
    console.log('http://localhost:4000/api/games2/' + one + "/" + two);

    this.componentDidMount();

    Axios.get('http://localhost:4000/api/games2/' + one + "/" + two)
      .then()
      .catch()
  }

  componentDidMount() {
    var one = document.getElementById("SearchBy").value;
    var two = document.getElementById("SearchTerm").value;

    Axios.get('http://localhost:4000/api/games2/' + one + "/" + two)
        .then(response => {
            this.setState({ games: response.data.games });
        })
        .catch((error) => {
            console.log(error);
        });
}


  render() {
    return (
      <div>
        <h1>Search</h1>
        Search By
            <select id='SearchBy' name="SearchBy">
          <option id='Title' value="title">Name</option>
          <option id="YEar" value="year">Year</option>
          <option id="Gerne" value="gerne">Gerne</option>
        </select>
        <input id='SearchTerm' name="SearchTerm"></input>
        <br />
        <Button variant="warning" onClick={this.findGame}>Find</Button>

        <SearchGames myGames={this.state.games}></SearchGames>

      </div>
    );
  }
}

export default Search;
