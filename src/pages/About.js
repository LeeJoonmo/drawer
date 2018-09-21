import React, { Component } from 'react';
import 'shared/App.css';
import {Link} from 'react-router-dom';
import 'pages/About.css';
import {Aboutfrom} from 'components';
import Fade from 'react-reveal/Fade';


class About extends Component{
    state = {
        friends : this.props.friends
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
            <Link to ={'/'} className = "category-back">.</Link>
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