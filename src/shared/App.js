import React, { Component } from 'react';
import {Cardcontainer, Cardcontainermain, About} from 'pages';
import './App.css';
import {Route, Switch, Link, NavLink} from 'react-router-dom';
import bodymovin from 'bodymovin';
import animationData from './logodata.json';

var drawerData = require('./mydata.json');
var logoAnimation;

class App extends Component {
  animationIsAttached = false;
  scrollCheck = false;
state = {
  drawers : drawerData.drawers,
  friends : drawerData.friends,
}


_attachAnimation = () => {
  if (this.animationContainer !== undefined && !this.animationIsAttached) {
    const animationProperties = {
      container: this.animationContainer,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: animationData
    }

    logoAnimation = bodymovin.loadAnimation(animationProperties);
  }
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
  this._attachAnimation();
  window.addEventListener('scroll', () =>{
    if (window.scrollY < 200 && this.scrollCheck === false){
      logoAnimation.goToAndPlay(0);
      this.scrollCheck = true;
    }else if (window.scrollY >200 &&this.scrollCheck === true){
      this.scrollCheck = false;
      };
  });
}
  
  render() {
        return(
          <div>
          <div className = "main">
            <div className = "header" id = "header">
              <Link to = {'/'}> <div className = "drawer-logo" ref={(animationDiv) => { this.animationContainer = animationDiv;}}> </div></Link>
              <div className = "header-bottom">
                <div className = "category-container">
                <NavLink to = {'/main/all'} className = "category-text"   activeStyle={{fontWeight: 'bold'}}>All</NavLink>
                <NavLink to = {'/main/studio'} className = "category-text"   activeStyle={{fontWeight: 'bold'}}>Studio</NavLink>
                <NavLink to = {'/main/ui'} className = "category-text"   activeStyle={{fontWeight: 'bold'}}>UI/UX</NavLink>
                <NavLink to = {'/main/branding'} className = "category-text"   activeStyle={{fontWeight: 'bold'}}>Branding</NavLink>
                <NavLink to = {'/main/etc'} className = "category-text"   activeStyle={{fontWeight: 'bold'}}>Etc</NavLink>
                </div>
                <NavLink to = {'/about'} className = "about-button"   activeStyle={{fontWeight: 'bold'}}>About</NavLink>
              </div>
              <div className = "header-bottomline"></div>
              <Route exact path="/about" render = {this._renderAbout}/>
            </div>
            <Switch>
            <Route path="/main/:id" render = {this._renderCardContainer}/>
            <Route exact path="/" render = {this._renderCardContainerMain}/>
           
          </Switch>
          <div className = "footer">
           <div className = "footer-say">
            Good references make us happy :) 
           </div>
            drawer copyright@LeeJoonmo
          </div>
          </div>
          </div>
        )
  }
}


export default App;
