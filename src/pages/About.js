import React, { Component } from 'react';
import 'shared/App.css';
import {Link} from 'react-router-dom';
import 'pages/About.css'

class About extends Component{
    render(){
        return(
            <div className = "about-contents">
            <Link to ={'/'} className = "category-back">.</Link>
            <div className = "about-uppertext">
                drawer collects <br/>
                inspirng bookmarks from<br/>
                Respectable designers.<br/>
            </div>
            <div className = "about-bottomtext">
            When you need inspiration or <br/>
            when you need to widen your insight, <br/>
            Please open this drawer.<br/>
            </div>
            <div className = "about-thanks">
            from<br></br>
            JIYOEN  Product Designer <br/>
            SOEKWON Designer<br/>
            JOONMO Product Designer<br/>
            And many another friends.<br/>
            </div>

            </div>
            
        );
    }
}

export default About;