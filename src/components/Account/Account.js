
import React  from 'react';
import axios from 'axios';

import { Header } from './../Header/Header';
import { Footer } from './../Footer/Footer';


class App extends React.Component{
    state = {
        parcels: []
      }
    
      componentDidMount() {
        axios.get(`http://localhost:3100/api/v1/parcels`)
        .then(res => {
            const parcels = res.data.parcels;
            this.setState({parcels:parcels});
        })
        .catch(function (error) {
        console.log(error);
        })          
      }
      render() {
        return (
            <section>
                <Header />
                <div className="row">
                    <div className="container"> 
                        {/* left side menu */}
                        <div className="s4 m4 l1">
                            <ul className="sidebar">
                                <li><a href="#"><span className="fas fa-cube"></span> Parcel Orders</a></li>
                                <li><a href="#"><span className="fas fa-user"></span> Profile</a></li>
                                <li><a href="#"><span className="fas fa-bell"></span> Notifications</a></li>
                                <li><a href="#"><span className="fas fa-sign-out-alt"></span> Logout</a></li>
                            </ul>
                        </div>
                        {/* user content */}
                        <div className="s4 m4 l3">   
                            {/* account summary */}
                            <div className="row xl-v-margin">

                                <div className="s2 m1 l1 shadow-2 center-align radius-3">
                                    <h2 className="center-align xxl-text">27</h2>
                                    <div className="divider grey"></div>
                                    <div className="center-align l-padding">Orders</div>
                                </div>
                                <div className="s2 m1 l1 shadow-2 center-align radius-3">
                                    <h2 className="center-align xxl-text">1</h2>
                                    <div className="divider grey"></div>
                                    <div className="center-align l-padding">In Transit</div>
                                </div>
                                <div className="s2 m1 l1 shadow-2 center-align radius-3">
                                    <h2 className="center-align xxl-text">26</h2>
                                    <div className="divider grey"></div>
                                    <div className="center-align l-padding">Delivered</div>
                                </div>
                                <div className="s2 m1 l1 indigo darken-1 shadow-2 center-align radius-3">
                                    <a href="new.html">
                                        <h2 className="center-align xxl-text text-white">+</h2>
                                        <div className="divider indigo darken-1"></div>
                                        <div className="center-align l-padding text-white">Create New</div>
                                    </a>
                                </div>
                            </div>                        
                                <div className="clear"></div>
                            <br/> 
                            <ul>
                    
                    
                            </ul>  
                            <table className="bordered left-align  shadow-2 radius-1">
                                <tr>
                                    <th>#</th>
                                    <th>Orders</th>
                                    <th>Status</th>
                                    <th> &nbsp; </th>
                                </tr>
                                {this.state.parcels.map((parcel) =><tr><td className="center-align">{parcel.id}</td> <td><h6 className="nm l-text capitilize">{parcel.title}</h6><span className="text-red">{parcel.created_time}</span></td><td>{parcel.state}</td> <td className="center-align"> <a href="/users/5/parcels" className="btn indigo text-white radius-5">Details</a> </td></tr>)}
                            </table>                 
                        </div>
                    </div>
                </div>
                <div className="clear"></div>
                <Footer />
            </section>
        )
      }
}
export default App;