import React, { Component } from 'react';
import history from './history';
import { Router, Route, Link, Switch } from "react-router-dom";
import * as firebase from 'firebase';
import 'firebase/firestore';
import Projekter from './projekter';
import Login from './login';
import Dashboard from './dashboard';
import Projekt from './projekt';
import Header from './header';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projekter: [],
      indhold: ''
    }
    this.getprojekter = this.getprojekter.bind(this);
    this.getindhold = this.getindhold.bind(this);
    this.requireAuth = this.requireAuth.bind(this);
    };

  componentDidMount() {
    this.getprojekter();
    this.getindhold();
  }
  
  getindhold() {
    let db = firebase.firestore();
    let test = db.collection("indhold").doc('om');
    test.get()
    .then(snapshot => {      
      this.setState({
        indhold: snapshot.data().bs
      });
    });
  }

  getprojekter() {
    let db = firebase.firestore();
    let test = db.collection("Projekter");
    test.get()
    .then(snapshot => {
        let projektliste = [];
        snapshot.forEach(elm => {
          let projektet = {};
          projektet = {
            "title": elm.id,
            "beskrivelse": elm.data().beskrivelse,
            "billede": elm.data().billede,
            "github": elm.data().github,
            "kategori": elm.data().kategori,
            "url": elm.data().url,
            "tags": elm.data().tags
          }
          projektliste.push(projektet)
        })
      this.setState({
        projekter: projektliste,
      });
    });
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
    const loader = document.getElementById("loader");
    if (this.state.indhold === '') {
      loader.style.display = 'block';
    } else {
      loader.classList.add("animation");
      setTimeout(() => {
        loader.style.display = 'none';
      }, 2000);
    }

    return (
      <Router history={history}>
        <Switch>
              <Route exact path={'/'} 
              render={(props) => 
                <React.Fragment>
                  <Header {...props} indhold={this.state.indhold}/>
                  <Projekter {...props} projekter={this.state.projekter}/>
              </React.Fragment>
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
              <Dashboard {...props} onEnter={this.requireAuth} projekter={this.state.projekter} get={this.getprojekter} geti={this.getindhold} indhold={this.state.indhold}/>
                }
              />
              <Route exact path={'/logout'} 
              render={this.logout}
              />
        </Switch>
        <footer className="mh-footer mh-footer-3 top-border">
          <div className="container-fluid">
            <div className="map-image image-bg col-sm-12">
              <div className="container mt-30">
                <div className="row">
                  <div className="col-sm-12 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">
                    <div className="row">
                       <div className="col-sm-6">
                           <div className="text-left text-xs-center">
                              <p>Stroustrup Webdesign @ 2019</p>
                            </div>
                        </div>
                      <div className="col-sm-6">
                          <ul className="social-icon">
                              <li><a href=""><i className="fa fa-facebook"></i></a></li>
                              <li><a href=""><i className="fa fa-github"></i></a></li>
                              <li><a href=""><i className="fa fa-linkedin"></i></a></li>
                              <li><Link to={'/login'}><i className="fa fa-sign-in"></i></Link></li>
                          </ul>
                      </div>
                     </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </Router>
    );
  }
}

export default App;