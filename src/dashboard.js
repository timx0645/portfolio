import React, {Component} from 'react';
import {Link} from "react-router-dom";
import * as firebase from 'firebase';
import 'firebase/firestore';
import axios from 'axios';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state ={
            file: null
        };
        this.onChange = this.onChange.bind(this);
        this.add = this.add.bind(this);
        };
    componentDidMount() {
        this.props.onEnter()
    }
    add(e) {
        e.preventDefault();
        let titel = e.target.titel.value;
        let beskrivelse = e.target.beskrivelse.value;
        let url = e.target.url.value;
        let github = e.target.github.value;
        let billede = e.target.billede.files[0].name;
        //Uploader alt info fra formen
        let list = [];
        let db = firebase.firestore();
        let portfolioref = db.collection("Projekter");
        portfolioref.get()
        .then( e => {
            e.forEach( s => {
                list.push(s.id)
            })
            if(list.includes(titel)) {
                document.getElementById('error').append('Title allerede i brug')
            } else {
                //Uploader billedet til en upload mappe
                const formData = new FormData();
                formData.append('billede',this.state.file);
                const config = {
                    headers: {
                        'content-type': 'multipart/form-data',
                    }
                };
                axios.post("./billeder", formData, config)
                    .then((response) => {
                        alert("The file is successfully uploaded");
                    }).catch((error) => {
                });
                //Tilføjer til db
                portfolioref.doc(titel).set({
                    beskrivelse: beskrivelse,
                    url: url,
                    github: github,
                    billede: billede
                })
                this.props.getprojekter()
            }
        })    
    }
    onChange(e) {
        this.setState({file:e.target.files[0]});
    }
    
    render() {
        let projekter = this.props.projekter;
        let list = [];
        projekter.forEach(element => {
            list.push()
        }); 
        return (
            <div className="w3-container">
                <Link to={'/logout'}>Logud</Link>

                <div id="add">
                <span id="error"></span>
                <h3>Tilføj et projekt</h3>
                <form onSubmit={this.add} method="POST">
                <label>Titel</label>
                <input type="text" name="titel"/>
                <label>Beskrivelse</label>
                <input type="textarea" name="beskrivelse"/>
                <label>URL</label>
                <input type="textarea" name="url"/>
                <label>Github</label>
                <input type="textarea" name="github"/>
                <label>Tilføj bilede</label>
                <input type="file" multiple  name="billede" onChange= {this.onChange} />
                <input type="submit" value="Tilføj projekt"/>
                </form>
                </div>
                <div id="projekter">
                    {list}
                </div>
            </div>
        );
    }
}

export default Dashboard;
