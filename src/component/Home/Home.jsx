import React, {Component} from 'react';

class Home extends Component {
    render(){
        return(
                <div className="slider">
                    <div className="container sliderimage">
                <div className="row">
                <img className="img-fluid rounded slider" src={require('../../gambar/head.png')} alt="Responsive image"/>
                </div> 
                    </div>
                    <div className="container notive">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="alert alert-dangger dangger" role="alert">
                                    <p className="text-white text-center"> A simple succes alert-check it out! </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container slide">
                        <div className="row">
                            <div className="col-md-8">
                                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img className="img-fluid d-block w-100" src={require('../../gambar/Home1.jpeg')} />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="img-fluid d-block w-100" src={require('../../gambar/Home2.jpg')}/>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="img-fluid d-block w-100" src={require('../../gambar/Home3.jpg')}/>
                                        </div>
                                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                            <span className="crousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                            <span className="crousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <img className="img-fluid rounded slide" src={require('../../gambar/mini.jpg')} alt="Responsive image"/>
                                <img className="img-fluid rounded slide" src={require('../../gambar/mini1.jpg')} alt="Responsive image"/>
                                
                            </div>
                        </div>
                    </div>


    </div>
        );
    }
}
export default Home;