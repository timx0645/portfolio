import React, {Component} from 'react';
import * as firebase from 'firebase';
import 'firebase/firestore';
import {Link} from "react-router-dom";

class Projekt extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            projekt: [],
            tags: []
        }
    };

    componentDidMount() {
        const title = this.props.title;
        let db = firebase.firestore();
        let test = db.collection("Projekter");
        let query = test.doc(title);
        query.get()
        .then(snap => {
            this.setState({
                title: snap.id,
                projekt: snap.data(),
                tags: snap.data().tags
            })
        })
        .catch(err => console.log(err))
    }
    
    render() {
        const loader = document.getElementById("loader");
            if (this.state.title === '') {
                loader.style.display = 'block';
            } else {
                loader.classList.add("animation");
            setTimeout(() => {
                loader.style.display = 'none';
            }, 1800);
        }
        let tags = [];
        let arr = this.state.tags;
        for (let i = 0; i < arr.length; i++) {
            tags.push(<div className="tag">{arr[i]}</div>)
        }
        let kategori = '';
        let kat = this.state.projekt.kategori;
        if (kat === 'stroustrup') {kategori = 'fobindelse med Stroustrup Webdsign'} else if(kat === 'fobindelse med min uddannelses') {kategori = 'Uddannelsen'} else {kategori = 'min Fritid'}
        return (
            <div className="top-border">
                <div className="mh-home image-bg home-2-img hund" style={{backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/portfolio-47741.appspot.com/o/workstation-405768_1920.jpg?alt=media&token=921619a0-b8e3-4990-a946-9d8ef19302db)'}}>
                    <div className="img-foverlay img-color-overlay hund">
                    <div className="feature" style={{backgroundImage: 'url('+ this.state.projekt.billede +')'}}></div>
                        <div className="container">
                            <div className="row section-separator xs-column-reverse vertical-middle-content home-padding">
                                <div className="col-sm-6">
                                    <div className="mh-header-info">
                                        <h3 className="wow fadeInUp cap">{this.state.title}</h3>
                                        <h5>Lavet i {kategori}</h5>
                                        <ul>
                                            <li className={this.state.projekt.url === "no" ? "no" : "wow fadeInUp"}><i className="fa fa-code"></i><Link to={this.state.projekt.url}>Se live versionen</Link></li>
                                            <li className={this.state.projekt.github === "no" ? "no" : "wow fadeInUp"}><i className="fa fa-github"></i><Link to={this.state.projekt.github}>Check koden ud på github</Link></li>
                                        </ul>
                                        <p><strong>Beskrivelse: </strong>{this.state.projekt.beskrivelse}</p>
                                        <h6>Tags</h6>
                                        <div className="tag-container">{tags}</div>
                                        <h6 className="tag-h6"><Link to={'/'}><i className="fa fa-caret-left"></i> Tilbage</Link></h6>                               
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projekt;
