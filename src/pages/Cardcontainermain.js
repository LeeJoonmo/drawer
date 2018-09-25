import React, { Component } from 'react';
import 'shared/App.css'
import {Card, ScardContainer} from 'components';
import Fade from 'react-reveal/Fade';



class Cardcontainermain extends Component {
  state = {
    drawers: this.props.drawers,
  }
  componentWillMount(){

  }
  componentDidMount() {
  }


  _filterFunction = (value) => {
    return value.category[0] === this.props.category;
  }

  _filter = (category) =>{

  const result = this.props.drawers.filter(value => {return value.category[0] === category});
  return result;
  }
      

  _renderCards(category){
  // const cardsArray = this.props.match.params.id === "all" || undefined ? this.state.drawers : this._filter(category);
    const cardsArray = this.state.drawers;
    const cards = cardsArray.map((cards, index) => {
      return <Card title = {cards.title} info = {cards.info} img = {cards.img} tag = {cards.tag} url = {cards.url} key = {index} />
    });
    return cards
  }

  render(){
      console.log();
      return(
          <div className = "card-container" id = "card-container" >
            <ScardContainer></ScardContainer>
            <Fade>
              {this._renderCards()}
              </Fade>
          </div>
      );
}
}

export default Cardcontainermain;