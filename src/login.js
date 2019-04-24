import React, {Component} from 'react';
import history from './history';
import * as firebase from 'firebase';
import 'firebase/firestore';
import {Link} from "react-router-dom";


class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        };
    componentDidMount() {
        if(localStorage.getItem('id')) {
            history.push('/dashboard')
        }
    }
    login(event) {
        event.preventDefault();
        const form = event.target;
        let Brugernavn = form.Brugernavn.value;
        let Pass = form.Pass.value;
        let db = firebase.firestore();
        let test = db.collection("Bruger");
        let query = test.doc('Tim');
        query.get().then(snap => {
            let db = snap.data()
            if (db.Brugernavn === Brugernavn && db.Pass === Pass) {
                localStorage.setItem('id', true);
                history.push(`/dashboard`);
            } else {
                document.getElementById('error').append('Er du ikke mig, kommer du ikke ind. ;)')
            }
        })
        .catch(err => console.log(err))
      }
    render() { 
        return (
            <div className="login-container" id="container">
            <h3>Login</h3>
            <div className="w3-twothird">
                <form onSubmit={this.login}>
                <span id="error"></span>
                    <p>
                        <input type="text" name="Brugernavn" className="form-control" style={{color: '#495057'}} placeholder="Brugernavn"/>
                    </p> 
                    <br/>
                    <p>
                        <input type="text" name="Pass" className="form-control"  style={{color: '#495057'}} placeholder="Kodeord"/>
                    </p> 
                    <br/>  
                    <input type="submit" value="Login" className="btn btn-fill btn-block"/>             
                </form>
                <Link to={'/'}>TIlbage</Link>
            </div>
            </div>
        );
    }
}

export default Login;