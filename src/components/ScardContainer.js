import React, { Component } from 'react';
import './Card.css'


class ScardContainer extends Component {
  render() {
    return (
      <div className="scard-body">
      
        <div className = "scard-wrap-first">
           
        <a className = "a-scard" href = "https://www.pinterest.com" target= "_blank" rel="noopener noreferrer">
              <div className = "scard-child"> 
                    <img className = "scard-img" src = "http://www.leejoonmo.com/drawerimg/pinterest.png" alt = "pinterest" ></img>
                    </div>
            </a>
            <a className = "a-scard" href = "https://www.behance.net" target= "_blank" rel="noopener noreferrer">
                <div className = "scard-child">
                <img className = "scard-img" src = "http://www.leejoonmo.com/drawerimg/behance.png" alt = "behance"></img>
                </div>
            </a>
            <a className = "a-scard" href = "https://www.dribbble.com" target= "_blank" rel="noopener noreferrer">
                <div className = "scard-child">
                <img className = "scard-img" src = "http://www.leejoonmo.com/drawerimg/dribbble.png" alt = "dribbble"></img>
                </div>

            </a>
             
         
       </div>
       <div className = "scard-wrap-second">
          <a className = "a-scard" href = "https://www.google.com" target= "_blank" rel="noopener noreferrer">
              <div className = "scard-child"> 
                    <img className = "scard-img" src = "http://www.leejoonmo.com/drawerimg/google.png" alt = "google" ></img>
                    </div>
            </a>
            <a className = "a-scard" href = "https://www.youtube.com" target= "_blank" rel="noopener noreferrer">
                <div className = "scard-child">
                <img className = "scard-img" src = "http://www.leejoonmo.com/drawerimg/youtube.png" alt = "youtube"></img>
                </div>
            </a>
            <a className = "a-scard" href = "https://www.vimeo.com" target= "_blank" rel="noopener noreferrer">
                <div className = "scard-child">
                <img className = "scard-img" src = "http://www.leejoonmo.com/drawerimg/vimeo.png" alt = "vimeo"></img>
                </div>

            </a>
          </div>  

                
        <div className = "card-title">Everything</div>
      </div>

     
    );
  }
}

export default ScardContainer;