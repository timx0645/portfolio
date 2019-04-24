import React, {Component} from 'react';
import {Link} from "react-router-dom";
import * as firebase from 'firebase';
import 'firebase/firestore';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null,
        };
        this.add = this.add.bind(this);
        this.delete = this.delete.bind(this);
    };

    componentDidMount() {
        this.props.onEnter()
    }

    delete(e) {
        firebase.firestore().collection("Projekter").doc(e).delete()
        .then(
            this.props.get()
        );
    }

    change(e) {
        e.preventDefault();
        let tekst = e.target.tekst.value;
        let db = firebase.firestore();
        db.collection("indhold").doc('om').set({
            bs: tekst
        });
    }

    add(e) {
        e.preventDefault();
        let titel = e.target.titel.value;
        let beskrivelse = e.target.beskrivelse.value;
        let websiteurl = e.target.url.value;
        let kategori = e.target.kategori.value;
        let github = e.target.github.value;
        let tags = [];
        e.target.checkbox.forEach(d => {
            if (d.checked) {
                tags.push(d.value)
            }
        });
        //Uploader alt info fra formen
        let list = [];
        let db = firebase.firestore();
        let portfolioref = db.collection("Projekter");
        if (!titel || !beskrivelse || !e.target.billede.files[0]) {document.getElementById('error').append('Tilføj ting')}
        else {
            if(!websiteurl) {websiteurl = 'no'}
            if(!github) {github = 'no'}
        portfolioref.get()
        .then( e => {
            e.forEach( s => {
                list.push(s.id)
            })
            if(list.includes(titel)) {
                document.getElementById('error').append('Title allerede i brug')
            } else {
                //Uploader billedet til en upload mappe
                const ref = firebase.storage().ref();
                const billede = document.querySelector('#photo').files[0];
                const billedenavn = (+new Date()) + '-' + billede.name;
                const metadata = {
                    contentType: billede.type
                };
                const task = ref.child(billedenavn).put(billede, metadata);
                task
                .then(snapshot => snapshot.ref.getDownloadURL())
                .then((url) => {
                    //Tilføjer til db
                    portfolioref.doc(titel).set({
                    beskrivelse: beskrivelse,
                    url: websiteurl,
                    kategori: kategori,
                    github: github,
                    billede: url,
                    tags: tags
                    });
                    document.getElementById('addprojekt').reset();
                    this.props.get();
                })
                .catch(console.error);
            }
        }) 
      }   
    }
    
    render() {
        let projekterne = [];
        let projekt = this.props.projekter;
        projekt.forEach(elm => {
            let kategori = '';
            if (elm.kategori === 'stroustrup') {kategori = 'Stroustrup Webdsign'} else if(elm.kategori === 'uddannelses') {kategori = 'Uddannelse'} else {kategori = 'Fritid'}
            projekterne.push(
                <div className={'show grid-item col-md-4 col-sm-6 col-xs-12 user-interface plusplus'}>
                    <figure>
                        <img src={elm.billede} alt="img"/>
                        <figcaption className="fig-caption">
                            <h5 className="title" onClick={() => this.delete(elm.title)}>Delete</h5>
                            <h5 className="sub-title">{elm.title}</h5>
                        </figcaption>
                    </figure>
                </div>
            )
        });
        return (
            <div>
                <section class="mh-portfolio" id="mh-portfolio">
                    <div class="container">
                         <div class="row section-separator">
                            <div class="section-title col-sm-12 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s">
                                 <h5><Link to={'/'}>Forside</Link></h5>
                                 <h5><Link to={'/logout'}>Logud</Link></h5>
                            </div>
                            <div class="section-title col-sm-12 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s">
                                 <h3>Tilføj Projekt</h3>
                            </div>
                            <div class="part col-sm-12">
                                <div id="add">
                                 <span id="error"></span>
                                    <form onSubmit={this.add} id="addprojekt">
                                        <div class="col-sm-12">
                                            <input name="titel" class="contact-name form-control" id="name" type="text" placeholder="titel" style={{color: '#495057'}}/>
                                        </div>

                                        <div class="col-sm-12">
                                            <input name="url" class="contact-email form-control" id="L_name" type="text" placeholder="url" style={{color: '#495057'}}/>
                                        </div>

                                        <div class="col-sm-12">
                                            <input name="github" class="contact-subject form-control" id="email" type="text" placeholder="github" style={{color: '#495057'}}/>
                                        </div>

                                        <div className="container row">
                                            <div class="col-md-4">
                                                <input name="checkbox" class="contact-subject checkbox" type="checkbox" style={{color: '#495057', margin: 5}} value="React"/>
                                                <label>React</label> <br/>
                                                <input name="checkbox" class="contact-subject checkbox" type="checkbox" style={{color: '#495057', margin: 5}} value="Express"/>
                                                <label>Express</label> <br/>
                                                <input name="checkbox" class="contact-subject checkbox" type="checkbox" style={{color: '#495057', margin: 5}} value="Grafisk"/>
                                                <label>Grafisk</label> <br/>
                                            </div>
                                            <div class="col-md-4">
                                                <input name="checkbox" class="contact-subject checkbox" type="checkbox" style={{color: '#495057', margin: 5}} value="PHP"/>
                                                <label>PHP</label> <br/>
                                                <input name="checkbox" class="contact-subject checkbox" type="checkbox" style={{color: '#495057', margin: 5}} value="C#"/>
                                                <label>C#</label> <br/>
                                                <input name="checkbox" class="contact-subject checkbox" type="checkbox" style={{color: '#495057', margin: 5}} value="MongoDB"/>
                                                <label>MongoDB</label> <br/>
                                            </div>
                                            <div class="col-md-4">
                                                <input name="checkbox" class="contact-subject checkbox" type="checkbox" style={{color: '#495057', margin: 5}} value="Umbraco"/>
                                                <label>Umbraco</label> <br/>
                                                <input name="checkbox" class="contact-subject checkbox" type="checkbox" style={{color: '#495057', margin: 5}} value="Wordpress"/>
                                                <label>Wordpress</label> <br/>
                                                <input name="checkbox" class="contact-subject checkbox" type="checkbox" style={{color: '#495057', margin: 5}} value="Firebase"/>
                                                <label>Firebase</label> <br/>
                                            </div>
                                        </div>

                                        <div class="col-sm-12">
                                            <select name="kategori" class="contact-select form-control" style={{color: '#495057'}}>
                                            <option value="stroustrup">Stroustrup Webdesign</option>
                                            <option value="uddannelses">Uddannelses projekt</option>
                                            <option value="fritid">Fritid</option>
                                            </select>
                                        </div>

                                        <div class="col-sm-12">
                                            <input class="contact-subject form-control" type="file" multiple  name="billede" id="photo" style={{color: '#495057'}}/>
                                        </div>

                                        <div class="col-sm-12">
                                            <textarea class="form-control" id="message" rows="6" placeholder="beskrivelse" name="beskrivelse" style={{color: '#495057', height: 200}}></textarea>
                                        </div>
                                        
                                        <div class="btn-form col-sm-12">
                                            <button type="submit" class="btn btn-fill btn-block disabled" id="form-submit">Tilføj</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-sm-12 text-center section-title wow fadeInUp section-separator" data-wow-duration="0.8s" data-wow-delay="0.2s" style={{visibility: 'visible'}}>
                                <h2>Projekter</h2>
                            </div>
                            <div className="mh-project-gallery col-sm-12 wow fadeInUp" id="project-gallery">
                                <div className="portfolioContainer row">
                                    {projekterne}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Dashboard;