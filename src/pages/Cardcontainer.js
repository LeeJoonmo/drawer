import React, { Component } from 'react';
import 'shared/App.css'
import {Card} from 'components';

var drawerData = require('./mydata.json');
class Cardcontainer extends Component {


    state = {
        cardState: drawerData
      }
  _renderCards(){
    const cards = this.state.cardState.map((cards, index) => {
      return <Card title = {cards.title} info = {cards.info} img = {cards.img} tag = {cards.tag} url = {cards.url} key = {index} />
    });
    return cards 
  }
  
  render(){
      return(
<div className = "card-container" id = "card-container" >
{this._renderCards()}
</div>
      );
}
}

export default Cardcontainer;