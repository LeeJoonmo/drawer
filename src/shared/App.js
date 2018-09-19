import React, { Component } from 'react';
import {Category} from 'components';
import {Cardcontainer, About} from 'pages';
import './App.css';
import {Route, Link} from 'react-router-dom';


class App extends Component {

componentDidMount() {
    
}
  
  render() {
        return(
          <div>
          <div className = "main">
          <div className = "bar-left"></div>   <div className = "bar-right"></div>  
            <div className = "header" id = "header">
              <div className = "drawer-logo"> <img className = "header-logo-img" src = {require('img/drawerlogo.png')} alt = "Hello"></img> </div>
              <div className = "header-bottom">
                  
                <Link to = {'/about'} className = "about-button">About</Link>
              </div>
              <div className = "header-bottomline"></div>
              <Route exact path="/about" component = {About}/>
            </div>
          <Route exact path="/" component = {Cardcontainer}/>
         
          </div>
          </div>
        )
  }
}


export default App;
