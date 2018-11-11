import React from 'react';

export const Footer = () => {
    return(
        <footer className=" indigo darken-2">
            <div className="row">
                <div className="container"> 
                    <div className="xl-padding">
                        <div className="s4 m4 l2">
                            <div className="l-padding center">
                                <h1 className="xxl-text  text-white text-darken-1 capitilize">Contact us</h1>
                                <ul className="list-block np">
                                    <li className="l-text  text-white text-darken-1"> Tel: +1 500 500 500</li>
                                    <li className="l-text  text-white text-darken-1"> Email: info@eveng.net</li>
                                    <li className="l-text  text-white text-darken-1"> Addresse</li>
                                    <li className="l-text  text-white text-darken-1"> Location (FL, IL, CA)</li>
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
            <div className="row indigo darken-3 text-white">
                <div className="container center-align ">
                    <div className="xl-padding">
                        <div className="center-align">
                            &copy; 2018 Company LLC
                        </div>
                    </div>
                    <br/>
                </div>
            </div>
            <div className="clear"></div>
        </footer>
    );
};
export default Footer;
