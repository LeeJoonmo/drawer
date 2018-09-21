import React, { Component } from 'react';
import {Cardcontainer, Cardcontainermain, About} from 'pages';
import './App.css';
import {Route, Switch, Link, NavLink} from 'react-router-dom';

var drawerData = require('./mydata.json');

class App extends Component {

state = {
  drawers : drawerData.drawers,
  friends : drawerData.friends,
}

_renderCardContainerMain = (props) =>{
  return(
    <Cardcontainermain drawers = {this.state.drawers} category = {this.state.category} {...props}/>
  );
}

_renderCardContainer = (props) =>{
  return(
    <Cardcontainer drawers = {this.state.drawers} category = {this.state.category} {...props}/>
  );
}

_renderAbout = (props)=>{
  return(
    <About friends = {this.state.friends} {...props}/>
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
                <div className = "category-container">
                <NavLink to = {'/main/all'} className = "category-text"   activeStyle={{fontWeight: 'bold'}}>All</NavLink>
                <NavLink to = {'/main/studio'} className = "category-text"   activeStyle={{fontWeight: 'bold'}}>Studio</NavLink>
                <NavLink to = {'/main/ui'} className = "category-text"   activeStyle={{fontWeight: 'bold'}}>UI/UX</NavLink>
                <NavLink to = {'/main/branding'} className = "category-text"   activeStyle={{fontWeight: 'bold'}}>Branding</NavLink>
                <NavLink to = {'/main/etc'} className = "category-text"   activeStyle={{fontWeight: 'bold'}}>Etc</NavLink>

                </div>
                <Link to = {'/about'} className = "about-button">About</Link>
              </div>
              <div className = "header-bottomline"></div>
              <Route exact path="/about" render = {this._renderAbout}/>
            </div>
            <Switch>
            <Route path="/main/:id" render = {this._renderCardContainer}/>
            <Route exact path="/" render = {this._renderCardContainerMain}/>
           
          </Switch>
          </div>
          </div>
        )
  }
}


export default App;
