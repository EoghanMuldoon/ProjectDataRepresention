import React from 'react';
import Card from 'react-bootstrap/Card';
import '../App.css';
import Axios from 'axios';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

class SearchGameItem extends React.Component {
  
  constructor(){
    super();
    this.deleteGame= this.deleteGame.bind(this);
  }
 
   deleteGame(e){
     
     Axios.delete('http://localhost:4000/api/games/'+this.props.game._id)
     .then()
     .catch();
   }
 
  render() {
    return (
      <div id="SearchGameItem">
        <Card>
          <Card.Header>{this.props.game.title}</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <img src={this.props.game.poster}></img>
              <footer>
                Gerne:  {this.props.game.genre} <br />
                Year:  {this.props.game.year}
              </footer>
            </blockquote>
          </Card.Body>
          <Button variant="danger" onClick={this.deleteGame}>Delete</Button>
          <Link to={"/edit/" + this.props.game._id} className="btn btn-primary">Edit</Link>
        </Card>
        <br /><br />
      </div>


    );
  }
}

export default SearchGameItem;
