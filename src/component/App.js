import React, { Component } from 'react';
import Home from './Home/Home.jsx';
import Grid from './Grid';
import '../style/styles.css';
import {BrowserRouter as Router,Link} from "react-router-dom";

import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;

class App extends Component {
  render() {
    return (
      <Router>
    <div className="header">
    <div className="container warna">
              <nav className="navbar navbar-expand-lg navbar-light warna">
                  <Link className="navbar-brand" to="#"> <img className="logo"src={require('../logo/logo.png')} alt="logo"/></Link>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                      <Link class="nav-item dropdown">
                        <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        PROMO
                      </Link>    
                      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                              <Link class="dropdown-item"to="#">PROMO</Link>
                              <Link class="dropdown-item"to="#">Partnership</Link>
                          </div>
                        </Link>
                      <Link className="nav-item dropdown">
                         <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button"data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           PAKET & ADD-ON
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown"> 
                            <Link className="dropdown-item" to="#">Action</Link>
                            <Link className="dropdown-item" to="#">another action</Link>
                          <div className="dropdown-divider"></div>
                          <Link className="dropdown-item" to="#">Something else here</Link>
                          </div>
                      </Link>
                      <li className="nav-item">
                      <Link className="nav-link">PUSAT BANTUAN</Link>
                      </li>
                    </ul>
                      </div>
                    </nav>
                  </div>
                        <div className="">
                                <Grid/>
                        </div>
                        <div className="Home">
                        <Home/>
                        </div>
     </div>
  </Router>
    )
  }
}

export default App;
