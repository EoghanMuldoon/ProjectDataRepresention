import React from 'react';
import GameItem from './GameItem';
import '../App.css';

class  Games extends React.Component {

  render(){
   return this.props.myGames.map((game) => 
    {
        console.log(game);
        return <GameItem game={game}></GameItem>   
    })
  }
}

export default Games;
