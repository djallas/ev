import React from 'react';

import { Header } from './../Header/Header';
import { Footer } from './../Footer/Footer';

// const init_email = "kagarama@ora.rw";
// const init_password = "123456";

class Login extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:""
        }
    }
    valid(item,type)
    {
        //console.warn("value",item.target.value);
        // let itemValue = item.target.value;
        // switch(type)
        // {
        //     case "email":{
        //         this.setState({email:itemValue});
        //     }
        //     case "password":{
        //         this.setState({password:itemValue});
        //     }  
        //     default:

        //     break;
        //     //     console.log("whooch");
            
        // }
        // console.warn("all",this.state);
    }

    // submit()
    // {
    //     let obj  = {};
    //     obj.email = this.state.email;
    //     obj.password = this.state.password;
    //     if(obj.email === init_email && obj.password === init_password)
    //     {
    //         console.log(obj)
    //     }else{
    //         console.log(obj);
    //     }
        
    // }

    render(){
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
                                    <div className="l-text text-white capitilize">Sign in to continue...</div>                    
                                    <div className="xl-v-padding"> &nbsp; </div>
                                </div>
                            </div>
                            <div className="s4 m4 l2">
                                <div className="l-padding">
                                        <h1 className="xxl-text text-indigo capitilize">
                                        Sign In
                                        </h1> 
                                    <form action="#">
                                        <div className="input-field">
                                            <label for="text">Email</label>
                                            <input type="email" 
                                            id="email" 
                                            placeholder="your email" 
                                            autoComplete="off"
                                            onChange={(item) => this.valid(item,"email")}/>
                                        </div>
                                        <div className="input-field">
                                            <label for="email">Password</label>
                                            <input 
                                            type="password" 
                                            placeholder="password"
                                            autoComplete="off"
                                            onChange={(item) => this.valid(item,"password")}                                         
                                            />
                                        </div>
                                        <div className="input-field">
                                            <button 
                                            type="submit" 
                                            value="submit" 
                                            className="btn indigo text-white bold radius-6 m-text l-padding"
                                            onClick={()=> this.submit()}
                                            >Sign In</button>                                    
                                        </div>
                                        <div className="row">
                                            <div className="l-padding">
                                                Haven't account yet? <a href="/register" className="bold">Sign up</a>
                                                &nbsp;&nbsp;
                                                Forgot your Password? <a href="/login" className="bold">Reset</a>
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
};

export default Login;