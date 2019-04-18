import React, { Component } from 'react';
import history from './history';
import { Router, Route, Link, Switch } from "react-router-dom";
import * as firebase from 'firebase';
import 'firebase/firestore';
import Projekter from './projekter';
import Login from './login';
import Dashboard from './dashboard';
import Projekt from './projekt';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projekter: []
    }
    this.getprojekter = this.getprojekter.bind(this);
    this.requireAuth = this.requireAuth.bind(this);
    };

  componentDidMount() {
   this.getprojekter()
  }

  getprojekter() {
    let db = firebase.firestore();
    let test = db.collection("Projekter");
    var query = test.doc('Stacky');
    query.get()
    .then(snap => {
      let list = [];
      snap.forEach(elm => {
        list.push(elm.data())
      });
      this.setState({
        test: list 
      })
    })
    .catch(err => console.log(err))
  }

  requireAuth() {
    if (!localStorage.getItem('id')) {
      history.push('/login')
    }
  }

  logout = async event => {
    localStorage.removeItem('id');
    history.push("/");
    window.location.reload();
  }

  render() {
    return (
      <Router history={history}>
      <Link to={'/login'}>Login</Link>
        <Switch>
              <Route exact path={'/'} 
              render={(props) => 
              <Projekter {...props} Projekter={this.state.projekter} />
                }
              />
              <Route exact path={'/projekt/:navn'} 
              render={(props) => 
              <Projekt {...props} title={props.match.params.navn}/>
                }
              />
              <Route exact path={'/login'} 
              render={(props) => 
              <Login {...props} />
                }
              />
              <Route exact path={'/dashboard'} 
              render={(props) => 
              <Dashboard {...props} onEnter={this.requireAuth} getprojekter={this.getprojekter} projekter={this.state.projekter}/>
                }
              />
              <Route exact path={'/logout'} 
              render={this.logout}
              />
        </Switch>
      </Router>
    );
  }
}

export default App;
