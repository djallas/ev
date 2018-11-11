import React from 'react';

import { Header } from './../Header/Header';
import { Footer } from './../Footer/Footer';

export const Order = () => {
    return(
        
        <section>
            <Header />
            <div className="row">
                <div className="container"> 
                    <div className="s4 m4 l2">
                        <div className="xl-padding">
                            <h1 className="xxl-text text-indigo">
                                Enjoy The Cheapest Parcel Delivery in the Kigali
                            </h1>
                            <div className="l-text">
                                Wherever you are in Kigali and wherever you want to send your parcel we compare the best couriers to get you the best services and delivery rates.
                            </div>
                            <br/>
                            <br/>
                            {/* <a href="#" className="btn jazzberry text-white l-h-padding l-v-padding radius-6">Get Started</a> */}
                        </div>
                    </div>
                    <div className="s4 m4 l2">
                        <div className="image">
                            <img src="./images/post_man-01.png" alt="Postman" />
                        </div>                
                    </div>                
                </div>
                <div className="clear"></div>
            </div>

            {/* HOW IT WORKS */}
            <div className="row indigo">
                <div className="container"> 
                    <div className="l-v-padding">
                        <div className="s4 m4 l4">
                            <div className="xl-padding center-align">
                                <h1 className="xxl-text text-white">
                                    How it Works?
                                </h1>
                                <div className="l-text text-white">
                                    It is fast and easy!
                                </div>
                                <br/>
                            </div>
                        </div>
                        <div className="s4 m4 l4 center-align">
                            <div className="s2 m2 l1">
                                <div className="m-margin image">
                                     <img src="./images/order-01.png" alt="Order" />
                                </div>
                                    <h2 className="nm np text-white">Make Order</h2>
                                    <div className="text-white">Make your order</div>
                            </div>                  
                            <div className="s2 m2 l1">
                                <div className="m-margin image">
                                     <img src="./images/pickup-01.png" alt="Order" />
                                </div>
                                    <h2 className="nm np text-white">Pick Up</h2>
                                    <div className="text-white">Postman will pick up your parcel</div>
                            </div>                  
                            <div className="s2 m2 l1">
                                <div className="m-margin image">
                                     <img src="./images/track-01.png" alt="Order" />
                                </div>
                                    <h2 className="nm np text-white">Track</h2>
                                    <div className="text-white">Track the location</div>
                            </div>                  
                            <div className="s2 m2 l1">
                                <div className="m-margin image">
                                    <img src="./images/delivery-01.png" alt="Order" />
                                </div>
                                    <h2 className="nm np text-white">Delivery</h2>
                                    <div className="text-white">Get the parcel at your door</div>                                
                            </div>                
                        </div> 
                        <div className="clear"></div> 
                        <br /><br />                 
                    </div>
                </div>  
                <div className="clear"></div>             
            </div> 
            <br/><br/>
            <div className="row">
                <div className="container"> 
                    <div className="l-v-padding">
                        <div className="s4 m4 l1">
                            <div className="xl-padding">
                                <h1 className="xxl-text text-indigo">
                                    Pricing
                                </h1>
                                <div className="l-text text-indigo">
                                    Enjoy our affordable prices.
                                </div>
                                <br/>
                            </div>
                        </div>
                        <div className="s4 m4 l3 center-align">
                            <div className="s4 m2 l2 white radius-3 shadow-2">
                                <div className="nm">
                                    <h2 className="xl-text">Starter Plan</h2>
                                    <div className="radius-5 xl-text xl-padding">1-4kg</div>
                                    <div className="xl-text text-white xl-padding jazzberry darken-1">$9.9</div>
                                    <div className="text-white">Make your order</div>
                                </div>
                            </div>                  
                            <div className="s4 m2 l2 white radius-3 shadow-2">
                                <div className="nm">
                                    <h2 className="xl-text">Premium</h2>
                                    <div className="radius-5 xl-text xl-padding">5-30kg</div>
                                    <div className="xl-text text-white xl-padding jazzberry darken-1">$9.9</div>
                                    <div className="text-white">Make your order</div>
                                </div>
                            </div>                    
                        </div>                
                    </div>
                </div>               
            </div>   
            <div className="clear"></div>          
            <br/><br/>
            <div className="row indigo">
                <div className="container"> 
                    <div className="xl-padding">
                        <div className="s4 m4 l2">
                            <div className="l-padding center">
                                <h1 className="xxl-text text-white capitilize">Contact us</h1>
                                <ul className="list-block np">
                                    <li className="l-text text-white"> Tel: +250 788 00 11 00</li>
                                    <li className="l-text text-white"> Email: info@sendit.rw</li>
                                    <li className="l-text text-white"> Addresse</li>
                                    <li className="l-text text-white"> KCT House, 14th Floor</li>
                                    <li className="l-text text-white"> Street:  KN 1 S</li>
                                    <li className="l-text text-white"> Kigali, Rwanda</li>
                                </ul>
                            </div>                
                        </div> 
                        <div className="s4 m4 l2 indigo radius-5 hide-on-medium hide-on-small">
                            <div className="xl-padding">
                                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15950.092522708943!2d30.0597662!3d-1.9435297!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4d7196c0c0ef7e94!2sKigali+City+Tower+(KCT)!5e0!3m2!1sen!2srw!4v1541089997710" width="500" height="400" frameborder="0"  allowfullscreen></iframe> */}
                                <div className="xl-v-padding"> &nbsp; </div>
                            </div>
                        </div>                                   
                    </div>                
                </div>
                <div className="clear"></div>
            </div>
            <Footer />
        </section>
    );
};

export default Order;