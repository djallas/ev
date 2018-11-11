
import React from 'react';

import { Header } from './../Header/Header';
import { Footer } from './../Footer/Footer';


const NoMatch = () => {
    return(
        <section>
            <Header />
                <div>
                <div className="row">
                    <div className="container center"> 
                        <div className="s4 m4 l2">
                            <div className="xl-padding right-align">
                                <br/><br/><br/><br/>
                                <h1 className="xxl-text text-indigo">
                                    Error 404
                                </h1>
                                <div className="l-text">
                                    Sorry, the page you are looking doesn't exist
                                </div>
                                <div className="l-text">
                                    <a href="/" className="bold">You should go on homepage </a>
                                </div>
                                <br/>
                                <br/>
                            </div>
                        </div>               
                        <div className="s4 m4 l2">
                            <div className="xl-padding">
                                <div class="image">
                                    <img src={"images/404.png"} alt="404"/>
                                </div>
                                <br/>
                                <br/>
                            </div>
                        </div>               
                    </div>
                    <div className="clear"></div>
                </div>
                </div>
            <Footer />
        </section>
    );
};

export default NoMatch;