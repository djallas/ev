import React from 'react';
import PropTypes from 'prop-types';

export class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mode: undefined
            // age: props.initialAge,
            // status:0,
            // homeLink: props.initialLinkName
        };
        // setTimeout(()=>{
        //     this.setState({
        //         status:1
        //     });
        // },3000);
    }
    componentWillMount(){
        let mode;
        if(this.props.age > 70){
            mode = 'old';
        }else if(this.props.age < 18 ){
            mode = 'young';
        }else{
            mode = 'adult';
        }
        this.setState({mode});
    }
    // onMakeOlder(){
    //     // if(this.state.status === 0){
    //         this.setState({
    //             age: this.state.age + 3,
    //             status: 1
    //         });
    //     // }
    // }
    // onChangeLink(){
    //     this.props.changeLink(this.state.homeLink);
    // }
    // onHandleChange(event){
    //     this.setState({
    //         homeLink: event.target.value
    //     });
    // }
    render() {        
        return(
            <section> 
               
            </section>
            // <div className="container">  
            //     <p>Your name is: {this.props.name}, Your age: {this.state.age} </p>
            //     <p>state: {this.state.status} </p>
            //     <button onClick={ () => this.onMakeOlder()} className="btn black z-depth-0"> Make me older</button>
            //     <button className="btn indigo z-depth-0" onClick={this.props.greet}>Greet</button>
            //     <hr/>
            //     <input type="text" 
            //     onChange={(event) =>this.onHandleChange(event)} 
            //     value={this.state.homeLink} />
            //     <button className="btn green" 
            //     onClick={this.onChangeLink.bind(this)}
            //     >Change Home Link
            //     </button>
            //     <hr/>
            // </div>
        );
    }
    
}

personalbar.defaultProps = {age: 'unknown'};
Home.propTypes = {
    name: PropTypes.string,
    greet: PropTypes.func,
    initialLinkName: PropTypes.string
};