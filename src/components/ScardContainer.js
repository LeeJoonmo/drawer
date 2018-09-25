import React, { Component } from 'react';
import './Card.css'


class ScardContainer extends Component {
  render() {
    return (
      <div className="scard-body">
        <div className = "scard-wrap">
        <a href = "https://www.pinterest.com/" target="_blank">
            <div className = "scard-child">
                  <img className = "scard-img" src = "http://www.leejoonmo.com/drawerimg/pinterest.png" ></img>
            </div>
        </a>
        <a href = "https://www.behance.net/" target="_blank">
            <div className = "scard-child">
            <img className = "scard-img" src = "http://www.leejoonmo.com/drawerimg/behance.png" ></img>
            </div>
        </a>
        <a href = "https://dribbble.com/" target="_blank">
            <div className = "scard-child">
            <img className = "scard-img" src = "http://www.leejoonmo.com/drawerimg/dribbble.png"></img>
            </div>
        </a>
        <a href = "https://www.google.com/" target="_blank">
            <div className = "scard-child">
            <img className = "scard-img" src = "http://www.leejoonmo.com/drawerimg/google.png"></img>
            </div>
        </a>
        <a href = "https://www.youtube.com" target="_blank">
            <div className = "scard-child">
            <img className = "scard-img" src = "http://www.leejoonmo.com/drawerimg/youtube.png"></img>
            </div>
        </a>
        <a href = "https://www.vimeo.com" target="_blank">
            <div className = "scard-child">
            <img className = "scard-img" src = "http://www.leejoonmo.com/drawerimg/vimeo.png"></img>
            </div>
        </a>
        </div>
      </div>

     
    );
  }
}

export default ScardContainer;