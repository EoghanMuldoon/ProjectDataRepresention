import React, { Component } from 'react';
import './App.css';
import { HomePage } from './components/HomePage';
import { Read } from './components/Read';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          
         <Navbar bg="primary" variant="dark">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Read">Read</Nav.Link>
            </Nav>
          </Navbar>

          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/read" component={Read} />
          </Switch>

        </div>
      </Router>
    );
  }
}
export default App;
