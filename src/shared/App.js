import React, { Component } from 'react';
import {Category} from 'components';
import {Cardcontainer, About} from 'pages';
import './App.css';
import {Route, Link} from 'react-router-dom';

var drawerData = require('./mydata.json');

class App extends Component {

state = {
  drawers : drawerData.drawers,
  friends : drawerData.friends,
  category : "All"
}


_setCategory = (category) =>{
  this.setState({
    category : category
  });

}

_renderCardContainer = (props) =>{
  return(
    <Cardcontainer drawers = {this.state.drawers} category = {this.state.category} {...props}/>
  );
}

_renderAbout = (props)=>{
  return(
    <About name = {this.state.name} {...props}/>
  );
}

componentDidMount() {
  
}
  
  render() {
        return(
          <div>
          <div className = "main">
          <div className = "bar-left"></div>   <div className = "bar-right"></div>  
            <div className = "header" id = "header">
              <div className = "drawer-logo" > <img className = "header-logo-img" src = {require('img/drawerlogo.png')} alt = "Hello"></img> </div>
              <div className = "header-bottom">
                <Link to = {'/about'} className = "about-button">About</Link>
                <Category setCategory = {this._setCategory}/>
              </div>
              <div className = "header-bottomline"></div>
              <Route exact path="/about" render = {this._renderAbout}/>
            </div>
            <Route exact path="/" render = {this._renderCardContainer}/>
          <Route path="/:id" render = {this._renderCardContainer}/>
          </div>
          </div>
        )
  }
}


export default App;
