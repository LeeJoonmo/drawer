import React, { Component } from 'react';

class Junecontainer extends Component {
    constructor(props) {
        super(props);
        this._onchangef = this._onchangef.bind(this);
      }

    _onchangef = () =>{
        this.props.changef("studio");
        console.log("clicked");
    }
    render(){
        return(
            <div>
            <div>junemo</div>
            <div onClick = {this._onchangef}> click</div>
            </div>
        );
    }


}

export default Junecontainer;