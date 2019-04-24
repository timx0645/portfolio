import React, {Component} from 'react';

class Header extends Component {
    render() { 
        return (
            <div>
                <div className="mh-home image-bg home-2-img" style={{backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/portfolio-47741.appspot.com/o/workstation-405768_1920.jpg?alt=media&token=921619a0-b8e3-4990-a946-9d8ef19302db)'}}>
                    <div className="img-foverlay img-color-overlay">
                        <div className="container">
                            <div className="row section-separator xs-column-reverse vertical-middle-content home-padding">
                                <div className="col-sm-6">
                                    <div className="mh-header-info">
                                        <h3 class="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s" style={{visibility: 'visible'}}>Tim Stroustrup Skov Henriksen</h3>
                                        <h5 class="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s" style={{visibility: 'visible'}}>Webudvikler</h5>
                                        <ul>
                                            <li class="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s" style={{visibility: 'visible'}}><i class="fa fa-envelope"></i><a href="mailto:tim.s.h@hotmail.com">tim.s.h@hotmail.com</a></li>
                                            <li class="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.5s" style={{visibility: 'visible'}}><i class="fa fa-phone"></i>+45 21126075</li>
                                        </ul>
                                        <ul class="social-icon wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.7s" style={{visibility: 'visible'}}>
                                            <li><a href=""><i class="fa fa-facebook"></i></a></li>
                                            <li><a href=""><i class="fa fa-github"></i></a></li>
                                            <li><a href=""><i class="fa fa-linkedin"></i></a></li>
                                        </ul>                                 
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div class="hero-img wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.6s" style={{visibility: 'visible'}}>
                                        <div className="tre">
                                            <div class="img-border">
                                                <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-47741.appspot.com/o/27972330_10213648428478409_3000560134748803390_n.jpg?alt=media&token=c421fbdf-ed84-4b1f-82a5-72fed1b5e6d4" alt="mig" class="img-fluid"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section class="mh-service">
                    <div class="container">
                         <div class="row section-separator">
                            <div class="col-sm-12 text-center section-title wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s" style={{visibility: 'visible'}}>
                                <h2>Om mig</h2>
                            </div>
                            <div class="col-sm-12 text-center section-title wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s" style={{visibility: 'visible'}}>
                                <p>{this.props.indhold}</p>
                                <a href="https://firebasestorage.googleapis.com/v0/b/portfolio-47741.appspot.com/o/CV.pdf?alt=media&token=8c443bbd-2136-4129-a386-110926b9f87b" target="_blank" class="btn btn-fill wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s" style={{visibility: 'visible'}}>Downlaod CV <i class="fa fa-download"></i></a>
                            </div>
                         </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Header;
