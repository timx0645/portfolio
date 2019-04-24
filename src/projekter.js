import React, {Component} from 'react';
import {Link} from "react-router-dom";


class Projekter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sort: ''
        }
        this.sortch = this.sortch.bind(this);
    };

    componentDidMount() {
    }

    sortch(e) {
        this.setState({
            sort: e
        })
    }

    render() { 
        let list = [];
        let projekt = this.props.projekter;
        projekt.forEach(elm => {
            let kategori = '';
            if (elm.kategori === 'stroustrup') {kategori = 'Stroustrup Webdsign'} else if(elm.kategori === 'uddannelses') {kategori = 'Uddannelse'} else {kategori = 'Fritid'}
            let tags = [];
            let arr = elm.tags;
            for (let i = 0; i < arr.length; i++) {
                tags.push(<div className="tag">{arr[i]}</div>)
            }
            list.push(
                <div className={this.state.sort === elm.kategori || this.state.sort === '' ? 'show grid-item col-md-4 col-sm-6 col-xs-12 user-interface plusplus' : 'no-show grid-item col-md-4 col-sm-6 col-xs-12 user-interface plusplus'}>
                    <figure>
                        <img src={elm.billede} alt="img"/>
                        <figcaption className="fig-caption">
                            <i className="fa fa-search"></i>
                            <h5 className="title">{elm.title}</h5>
                            <span className="sub-title">{kategori}</span>
                            <span className="sub-tag sub-title">{tags}</span>
                            <Link to={`/projekt/${elm.title}`}></Link>
                        </figcaption>
                    </figure>
                </div>
            )
        });
        return (
          <div>
              <section className="mh-portfolio" id="mh-portfolio">
                <div className="container">
                    <div className="col-sm-12 text-center section-title wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s" style={{visibility: 'visible'}}>
                        <h2>Projekter</h2>
                        <h5>I forbindelse med</h5>
                    </div>
                    <div className="part col-sm-12">
                        <div className="portfolio-nav col-sm-12" id="filter-button">
                            <ul>
                                <li data-filter="*" className={this.state.sort === '' ? 'current wow fadeInUp' : 'wow fadeInUp'} data-wow-duration="0.8s" data-wow-delay="0.1s"> 
                                    <span>
                                        <button value="" onClick={() => this.sortch('')}>Alle</button>
                                    </span>
                                </li>
                                <li data-filter=".user-interface" className={this.state.sort === 'stroustrup' ? 'current wow fadeInUp' : 'wow fadeInUp'} data-wow-duration="0.8s" data-wow-delay="0.2s">
                                    <span>
                                        <button value="stroustrup" onClick={() => this.sortch('stroustrup')}>Stroustrup webdesign</button>
                                    </span>
                                </li>
                                <li data-filter=".branding" className={this.state.sort === 'uddannelses' ? 'current wow fadeInUp' : 'wow fadeInUp'} data-wow-duration="0.8s" data-wow-delay="0.3s">
                                    <span>
                                        <button value="uddannelses" onClick={() => this.sortch('uddannelses')}>Uddannelsen</button>
                                    </span>
                                </li>
                                <li data-filter=".mockup" className={this.state.sort === 'fritid' ? 'current wow fadeInUp' : 'wow fadeInUp'} data-wow-duration="0.8s" data-wow-delay="0.4s">
                                    <span>
                                        <button value="fritid" onClick={() => this.sortch('fritid')}>Fritiden</button>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mh-project-gallery col-sm-12 wow fadeInUp" id="project-gallery">
                        <div className="portfolioContainer row">
                            {list}
                        </div>
                    </div>
                </div>
              </section>
          </div>
        );
    }
}

export default Projekter;
