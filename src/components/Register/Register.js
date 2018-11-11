import React from 'react';

import { Header } from './../Header/Header';
import { Footer } from './../Footer/Footer';

export const Register = () => {
    return(
        
        <section>
            <Header />
            <div className="row">
                <div className="container"> 
                    <div className="xl-padding">
                        <div className="s4 m4 l2 hide-on-medium hide-on-small indigo radius-5">
                            <div className="xl-padding bglogin">
                                <h1 className="xxl-text text-white capitilize">
                                    Welcome to<br/>
                                    SENDIT<br/>
                                </h1>    
                                <div className="l-text text-white capitilize">Sign up to continue...</div>                    
                                <div className="xl-v-padding"> &nbsp; </div>
                            </div>
                        </div>
                        <div className="s4 m4 l2">
                            <div className="l-padding">
                                    <h1 className="xxl-text text-indigo capitilize">
                                    Sign Up
                                    </h1> 
                                <form action="#">
                                    <div className="input-field">
                                        <label for="email">Email</label>
                                        <input type="email" id="email" placeholder="your email" autoComplete="off"/>
                                    </div>
                                    <div className="input-field">
                                        <label for="email">Password</label>
                                        <input type="password" placeholder="your email" autoComplete="off"/>
                                    </div>
                                    <div className="input-field">
                                        <button type="submit" value="submit" className="btn indigo text-white bold radius-6 m-text l-padding">Sign In</button>                                    
                                    </div>
                                    <div className="row">
                                        <div className="l-padding">
                                            Haven't account yet? <a href="/register" className="bold">Sign up</a>
                                            &nbsp;&nbsp;
                                            Forgot your Password? <a href="/reset" className="bold">Reset</a>
                                        </div>
                                    </div>
                                </form>                
                            </div>                
                        </div>                
                    </div>                
                </div>
            </div>

                <div className="clear"></div>
            <Footer />
        </section>
    );
};

export default Register;