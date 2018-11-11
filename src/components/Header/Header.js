import React from 'react';
// import { default as Logo } from './../../images/logo.svg';

export const Header = (props) => {
    return(
        <header className="l4 green darken-1 on-scroll-shadow">
            <div className="container">
                <nav>
                    <div className="s4 m4 l1">
                        <div className="left">
                            <ul className="list-inline left-align ">
                                <li className="">
                                    {/* <a href="#" className="xl-text hide-on-large"> */}
                                        <span className="fas fa-bars m-margin"></span>
                                    {/* </a> */}
                                </li>
                                <li>
                                    <div className="logo">
                                        <img src='./../images/logo.svg' alt="SendIT" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="s4 m1 l3 hide-on-small hide-on-medium">
                        <div className="right">
                            <ul className="list-inline mainmenu">
                                <li><a href="/">Home</a> </li>
                                <li><a href="/#our-services">Our Services</a> </li>
                                <li><a href="/#contact" className="btn indigo text-white radius-5">Contact us</a> </li>
                            </ul>
                        </div>
                    </div>                    
                </nav>
            </div>
            <div className="clear"></div>
        </header>
    );
};