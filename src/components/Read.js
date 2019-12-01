import React, { Component } from 'react';
import Games from './Games';
import axios from 'axios';
import { anyTypeAnnotation } from '@babel/types';
export class Read extends Component {

    state = {
        games: []
    };

    componentDidMount() {
        axios.get('http://localhost:4000/api/games')
            .then(response => {
                this.setState({ games: response.data.games });
            })
            .catch((error) => {
                console.log(error);
            });
    }


    render() {
        return <div className="Read">
            <h1> Hello Read</h1>



            <Games myGames={this.state.games}></Games>
        </div>;
    }
}
export default Read;