import React from 'react';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

export const Term = () => {
    return(
        
        <section>
            <Header />
            <div className="row">
                <div className="container"> 
                    <div className="s4 m4 l2">
                        <div className="xl-padding">
                            <h1 className="xl-text text-indigo">
                                Terms and Conditions
                            </h1>
                            <div>
                                Terms and conditions coming soong....
                            </div>
                        </div>
                    </div>                
                </div>
                <div className="clear"></div>
            </div>
            <div className="clear"></div>
            <Footer />
        </section>
    );
};

export default Term;