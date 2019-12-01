import React from 'react';
import SearchGameItem from './SearchGameItem';
import '../App.css';

class  SearchGames extends React.Component {

  render(){
   return this.props.myGames.map((game) => 
    {
        console.log(game);
        return <SearchGameItem game={game}></SearchGameItem>   
    })
  }
}

export default SearchGames;