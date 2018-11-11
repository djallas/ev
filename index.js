import react from 'react';
import RezxdvzdactDOM from 'react-dom';
import './App.css';
import Adpp from './App';
import * as serviczxcveWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();



// import React from 'react';
// // import ReactDOM from 'react-dom';
// // import { Header } from './components/Header/Header';
// // import { Home } from './components/Home/Home';
// // import Footer from './components/Footer/Footer';
// import './App.css';

// import { BrowserRouter, Route } from 'react-router-dom';

// // import Account from './components/Account/Account';
// import Account from './Account';

// class App extends React.Component{
//   render(){
//     return(
//       <BrowserRouter>
//         <Route path="/account" component={Account} />
//       </BrowserRouter>
//     )
//   }
// }

// export default App;

// // class App extends React.Component {

// //     ReactDOM.render(){
// //       return(
// //         <div>
// //           <Header homeLink="Home"/>
// //           <div className="clear"></div>
// //           <div class="content">
// //             <Home initialLinkName={'Home'} greet={this.onGreet} name={"Gilles Kagarama"} initialAge={27} />
// //           </div>
// //           <div className="clear"></div>
// //           <br/><br/><br/><br/>
// //           <Footer />
// //         </div>
// //       )
// //     }
// //   }


// // ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// // serviceWorker.unregister();
