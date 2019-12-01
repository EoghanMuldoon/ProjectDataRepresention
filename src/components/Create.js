import React from 'react';
import '../App.css';
import axios from 'axios';

class  Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {Title: ''};
    this.state={Year:''};
    this.state={Genre:''};
    this.state={Cover:''};

    this.handleChangeGameTitle = this.handleChangeGameTitle.bind(this);
    this.handleChangeGameYear = this.handleChangeGameYear.bind(this);
    this.handleChangeGameGenre = this.handleChangeGameGenre.bind(this);
    this.handleChangeGameCover = this.handleChangeGameCover.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleChangeGameCover(e) {
    this.setState({Cover: e.target.value});
  }

  handleSubmit(e) {
    alert(this.state.Title +"  " + this.state.Year+ " "+this.state.Genre+ " "+this.state.Cover);
    e.preventDefault();
      
    const newgame={
        title: this.state.Title,
        year: this.state.Year,
        genre: this.state.Genre,
        cover: this.state.Cover
      }
      
    axios.post('http://localhost:4000/api/games', newgame)
    .then()
    .catch();

    this.setState({
      Title:'',
      Year:'',
      Genre:'',
      Cover:''
    });
  }

  render(){
    return (
      <div>
        <h1>Hello From Create</h1> 
        
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
            Game Cover URL:
            </label>
            <textarea 
              type="text" 
              className="form-control"
              value={this.state.Cover} 
              onChange={this.handleChangeGameCover} 
            />
          </div>
          
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Create;
