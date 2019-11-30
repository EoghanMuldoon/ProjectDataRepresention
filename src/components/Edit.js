import React from 'react';
import '../App.css';
import axios from 'axios';

class  Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {Title: ''};
    this.state={Year:''};
    this.state={Genre:''};
    this.state={Poster:''};

    this.handleChangeGameTitle = this.handleChangeGameTitle.bind(this);
    this.handleChangeGameYear = this.handleChangeGameYear.bind(this);
    this.handleChangeGameGenre = this.handleChangeGameGenre.bind(this);
    this.handleChangeGamePoster = this.handleChangeGamePoster.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    axios.get("http://localhost:4000/api/games/"+this.props.match.params.id)
    .then((response)=>{
      console.log(response.data.title);
      this.setState({
        Title:response.data.title,
        Year:response.data.year,
        Genre:response.data.genre,
        Poster:response.data.poster,
        _id:response.data._id
        
      })

    })
    .catch();
  }

  

  handleChangeGameTitle(e) {
    this.setState({Title: e.target.value});
  }

  handleChangeGameYear(e) {
    this.setState({Year: e.target.value});
  }

  handleChangeGameGenre(e) {
    this.setState({Genre: e.target.value});
  }

  handleChangeGamePoster(e) {
    this.setState({Poster: e.target.value});
  }

  handleSubmit(e) {
    alert(this.state.Title +"  " + this.state.Year+ " "+ this.state.Genre+ " "+this.state.Poster);
    e.preventDefault();
      
    const newgame={
        title: this.state.Title,
        year: this.state.Year,
        genre: this.state.Genre,
        poster: this.state.Poster
      };

      axios.put('http://localhost:4000/api/games/'+this.state._id, newgame)
  .then()
  .catch()
  }

  

  render(){
    return (
      <div>
        <h1>Hello From Edit</h1> 
        
        <form onSubmit={this.handleSubmit}>
         <div className='form-group'>
          <label>
          Game Title:
          </label>
          <input
            type="text" 
            className="form-control"
            value={this.state.Title} 
            onChange={this.handleChangeGameTitle} 
            />
          </div>
      
          <div className='form-group'>
            <label>
            Game Year:
            </label>
            <input 
              type="text" 
              className="form-control"
              value={this.state.Year} 
              onChange={this.handleChangeGameYear} 
            />
          </div>

          <div className='form-group'>
            <label>
            Game Genre:
            </label>
            <input 
              type="text" 
              className="form-control"
              value={this.state.Genre} 
              onChange={this.handleChangeGameGenre} 
            />
          </div>

          <div className='form-group'>
            <label>
              Game Poster URL:
            </label>
            <textarea 
              type="text" 
              className="form-control"
              value={this.state.Poster} 
              onChange={this.handleChangeGamePoster} 
            />
          </div>
          
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default Edit;
