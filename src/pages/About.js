import React, { Component } from 'react';
import 'shared/App.css';
import 'pages/About.css';
import {Aboutfrom} from 'components';
import Fade from 'react-reveal/Fade';
import bodymovin from 'bodymovin';
import animationData from './arrow.json';
import {Link} from 'react-router-dom';


var arrowAnimation;
class About extends Component{
    
    animationIsAttached = false;
    state = {
        friends : this.props.friends
    }

    _scrollCheck = () =>{
       console.log("hi");
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
  
          arrowAnimation = bodymovin.loadAnimation(animationProperties);
        }
      }

    componentDidMount(){
        this._attachAnimation();
    }
    _renderNames = () => {
        console.log(this.props.friends);
        const friends = this.props.friends.map((friends, index) => {
          return <Aboutfrom name = {friends.name} info = {friends.info} key = {index} />
        });
        return friends;
        }

    render(){
        return(
            
            <div className = "about-contents">
            <div className = "about-back">

               <Link to ={'/'} className = "about-back-button" >
               <div className = "about-arrow" ref={(animationDiv) => { this.animationContainer = animationDiv;}}> </div>
               </Link>

            </div>
            <div className = "about-uppertext">
                drawer collects <br/>
                inspirng bookmarks from<br/>
                Respectable designers.<br/>
                When you need to get inspiration,  <br/>
            Please open this drawer.
            </div>
            <div className = "about-from">
            from:<br></br>
            </div>
            <Fade>
            {this._renderNames()}
            </Fade>
            </div>
            
        );
    }
}

export default About;