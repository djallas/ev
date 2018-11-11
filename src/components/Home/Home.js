import React from 'react';

import { Header } from './../Header/Header';
import { Footer } from './../Footer/Footer';

const opacityStyle = {
    backgroundColor:'rgba(0,0,0,0.75)',
    marginTop:'3em'
}

class Home extends React.Component {
    render(){ 
        return(        
            <section>
                <Header />
                <div className="row green darken-1">
                    <div className="container"> 
                        <div className="s4 m4 l2">
                            <div className="xl-padding">
                                <div className="xl-v-padding">
                                <h1 className="xxl-text text-indigo">
                                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
                                </h1>
                                </div>
                                <div className="l-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                </div>
                                <br /><br />
                                <a href="/" className="btn indigo text-grey text-darken-1 xl-h-padding xl-v-padding">Contact Us</a>
                                <a href="/" className="btn indigo text-grey text-darken-1 xl-h-padding xl-v-padding">Get Started</a>
                            </div>
                        </div>
                        <div className="s4 m4 l2">
                            <div className="image solor-energy">
                                <div className="energer"><span></span><span></span> <span></span><span></span> </div>
                            </div>                
                        </div>                
                    </div>
                    <div className="clear"></div>
                </div>

                {/* ABOUT US */}
                <div className="row indigo" id="how-it-works">
                    <div className="container"> 
                        <div className="l-v-padding">
                            <div className="s4 m4 l4">
                                <div className="xl-padding center-align">
                                    <h1 className="xxl-text text-green text-darken-1">
                                        About Us
                                    </h1>
                                    <div className="l-text text-green text-darken-1">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lorem est, cursus a neque at, tincidunt laoreet mi. Morbi ornare neque id sapien viverra tincidunt. 
                                    <br />  <br /> 
                                    Suspendisse suscipit, nisl a egestas pulvinar, neque leo suscipit sem, nec convallis lorem felis at mauris. Ut ac aliquam nibh, vel mattis massa. Vivamus consectetur interdum faucibus. Aliquam massa turpis, <br /> eleifend eu viverra sed, convallis vel felis. Donec consequat gravida mauris ut venenatis
                                    </div>
                                    <br/>
                                </div>
                            </div>
                            <div className="clear"></div> 
                            <br /><br />                 
                        </div>
                    </div>  
                    <div className="clear"></div>             
                </div> 
                <br/><br/>
                <div className="row ">
                    <div className="container"> 
                        <div className="l-v-padding">
                            <div className="s4 m4 l1">
                                <div className="xl-padding">
                                    <div className="image">
                                        <img src="./../images/330.jpg"/>
                                    </div>
                                    <br/>
                                </div>
                            </div>
                            <div className="s4 m4 l3">
                                <div className="xl-padding">                                
                                    <div className="s4 m4 l4  l-text">
                                        <h1 className="xxl-text text-indigo nm np">
                                        Eng. Vincent
                                        </h1>
                                        <div className="l-text text-indigo">
                                            C.E.O
                                        </div>    
                                        <br/>                                
                                        In semper lorem non magna accumsan faucibus. Proin finibus arcu vel tellus rutrum fermentum. 
                                        Sed finibus dolor eget consectetur facilisis. Nunc imperdiet iaculis feugiat. Pellentesque elementum elementum mauris non porta. Fusce et sollicitudin justo. Sed ac ante suscipit, vestibulum leo quis, varius lorem. Praesent ullamcorper, 
                                        enim congue ullamcorper congue, neque ex vehicula lectus, molestie auctor orci arcu eu quam.
                                        <br /> <br /> <br />

                                        <a href="/" className="btn indigo text-white text-darken-1 xl-h-padding xl-v-padding">Learn more</a>                                        
                                    </div>
                                </div>                     
                            </div>                
                        </div>
                    </div>               
                </div>   
                <div className="clear"></div>          
                <br/><br/>
                {/* HOW IT WORKS */}
                <div className="row indigo" id="how-it-works">
                    <div className="container"> 
                        <div className="l-v-padding">
                            <div className="s4 m4 l4">
                                <div className="xl-padding center-align">
                                    <h1 className="xxl-text text-green text-darken-1">
                                        Our Services
                                    </h1>
                                </div>
                            </div>
                            <div className="clear"></div>            
                        </div>
                    </div>  
                    <div className="clear"></div>             
                </div>     
                {/* SERVICE ONE */}
                <div className="row hide">                
                    <div className="container"> 
                        <div className="l-v-padding">
                            <div className="s4 m4 l2">
                                <div className="xl-padding list-service">
                                    <h1 className="xl-text text-indigo">
                                    PV Projects Engineering Design and Drafting services
                                    </h1>                                
                                    <ul className="list-block nm np">
                                        <li>
                                            Development of AHJ-Compliant soal PV plan sets for both residential and commercial buildings
                                        </li>
                                        <li>
                                        We work within the limitation of the building to come up with the best PV system that meet our customers needs
                                        </li>
                                        <li>
                                        Help companies save resources during the design phase of PV projects
                                        </li>
                                        <li>
                                        Efficient and accurate designs at a low cost and fast turnaround
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="s4 m4 l2">
                                <div className="xl-padding center-align image">  
                                        <img src='./../images/solar-farm.jpg' alt="design" />
                                </div>
                            </div>
                            <div className="clear"></div>            
                        </div>
                    </div>  
                    <div className="clear"></div>             
                </div>                 
                {/* <div className="divider indigo"></div> */}
            <div className="row indigo bgdesign relative">                
                    <div className="container"> 
                        <div className="l-v-padding">
                            <div className="s4 m4 l2" style={opacityStyle}>
                                <div className="xl-padding xl-margin list-service">
                                    <h1 className="xl-text text-white">
                                        PV Projects Engineering Design and Drafting services
                                    </h1>                                  
                                    <ul className="list-block nm np text-white">
                                        <li>
                                            Development of AHJ-Compliant soal PV plan sets for both residential and commercial buildings
                                        </li>
                                        <li>
                                        We work within the limitation of the building to come up with the best PV system that meet our customers needs
                                        </li>
                                        <li>
                                        Help companies save resources during the design phase of PV projects
                                        </li>
                                        <li>
                                        Efficient and accurate designs at a low cost and fast turnaround
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        <div className="clear"></div>   
                            <br /><br /> <br />        
                        </div>
                </div>  
                <div className="clear"></div>             
            </div>                 
        
                {/* <div className="divider indigo"></div> */}
            <div className="row indigo bgdesign relative">                
                <div className="container"> 
                    <div className="l-v-padding">
                        <div className="s4 m4 l2">
                            <div className="xl-padding center-align image">  
                                    
                            </div>
                        </div>
                        <div className="s4 m4 l2" style={opacityStyle}>
                            <div className="xl-padding xl-margin list-service">
                                <h1 className="xl-text text-white">
                                Professional Engineering Services
                                </h1>                                
                                <ul className="list-block nm np text-white">
                                    <li>
                                    Review and stamp PV plans structural pages
                                    </li>
                                    <li>
                                    Review and stamp PV plans electrical pages
                                    </li>
                                    <li>
                                    Geotechnical design for ground mount PV systems
                                    </li>
                                    <li>
                                    Provide stamped structural letter and calculation summary
                                    </li>
                                    <li>
                                    Engineers letter for consumption estimates and Bus certification for main service panel boards that are missing labels
                                    </li>
                                    <li>
                                    Specifying structural upgrades to ensure compliance with the  code                                        
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="clear"></div>   
                        <br /><br /> <br />        
                    </div>
                </div>  
                <div className="clear"></div>             
            </div>                 
            
                 {/* <div className="divider indigo"></div> */}
                 <div className="row indigo bgdesign relative">                
                <div className="container"> 
                    <div className="l-v-padding">
                        <div className="s4 m4 l2" style={opacityStyle}>
                            <div className="xl-padding xl-margin list-service">
                                <h1 className="xl-text text-white">
                                Residential and Commercial Building Third Party Plan Checks
                                </h1>                                
                                <ul className="list-block nm np text-white">
                                    <li>
                                    Provide third party plan check services directly to permit applicants as a means of expediting the review process
                                    </li>
                                    <li>
                                    Third party clients have enhanced access to their plan checkers and can be assured of quicker turnaround times
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="s4 m4 l2">
                            <div className="xl-padding center-align image">                                      
                            </div>
                        </div>
                        <div className="clear"></div>   
                        <br /><br /> <br />        
                    </div>
                </div>  
                <div className="clear"></div>             
            </div>                 
 
            <br/><br/>                

                    {/* WHY WITH US */}
                <div className="row" id="how-it-works">
                    <div className="container"> 
                        <div className="l-v-padding">
                            <div className="s4 m4 l4">
                                <div className="xl-padding center-align">
                                    <h1 className="xxl-text text-indigo text-darken-1">
                                        Why Work With US
                                    </h1>
                                </div>
                            </div>
                            <div className="clear"></div> 
                            <div className="s4 m2 l1">
                                <div className="w120 why-1">
                                </div>
                                <div className="center-align xl-text xl-v-margin">
                                Solar PV design and professional services
                                </div>
                            </div>           
                            <div className="s4 m2 l1">
                                <div className="w120  why-2">
                                </div>
                                <div className="center-align xl-text xl-v-margin">
                                Professional engineers licensed in all 50 states
                                </div>
                            </div>           
                            <div className="s4 m2 l1">
                                <div className="w120  why-3">
                                </div>
                                <div className="center-align xl-text xl-v-margin">
                                High<br/> quality and fast turnaround
                                </div>
                            </div>           
                            <div className="s4 m2 l1">
                                <div className="w120  why-4">
                                </div>
                                <div className="center-align xl-text xl-v-margin">
                                    Design,<br/> review and plan checks
                                </div>
                            </div>           
                        </div>
                    </div>  
                    <br /><br />
                    <div className="clear"></div>             
                </div>  
                <Footer />
            </section>
        );
    };
};

export default Home;