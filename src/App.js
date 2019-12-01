import React, { Component } from 'react';
import './App.css';
import { HomePage } from './components/Start';
import Read from './components/Read';
import Create from './components/Create';
import Edit from './components/Edit';
import Search from './components/Search';
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
              <Nav.Link href="/create">Create</Nav.Link>
              <Nav.Link href="/Search">Search</Nav.Link>
            </Nav>
          </Navbar>

          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/read" component={Read} />
            <Route path="/create" component={Create} />
            <Route path="/Edit/:id" component={Edit} />
            <Route path="/Search" component={Search} />
          </Switch>

        </div>
      </Router>
    );
  }
}
export default App;
