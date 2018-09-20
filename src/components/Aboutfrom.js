import React, { Component } from 'react';
import 'pages/About.css'


class Aboutfrom extends Component {


    render(){
        return(
            <div className = "about-from-container">
                <div className = "about-from-name">{this.props.name}</div><div className = "about-from-info">{this.props.info}</div>
            </div>
        );
    }
}

export default Aboutfrom;