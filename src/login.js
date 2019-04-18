import React, {Component} from 'react';
import history from './history';
import * as firebase from 'firebase';
import 'firebase/firestore';

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
            <div class="w3-container" id="container">
            <h3>Login</h3>
            <div class="w3-twothird">
                <form onSubmit={this.login}>
                <span id="error"></span>
                    <p>
                        <span class="w3-quarter">Email:</span>
                        <input type="text" name="Brugernavn" class="w3-twothird"/>
                    </p> 
                    <br/>
                    <p>
                        <span class="w3-quarter">Password:</span>
                        <input type="text" name="Pass" class="w3-twothird"/>
                    </p> 
                    <br/>  
                    <input type="submit" value="Login" class="w3-button w3-dark-grey"/>             
                </form>
            </div>
            </div>
        );
    }
}

export default Login;
