import React, { Component } from 'react';
import 'shared/App.css'
import {Card} from 'components';
import Fade from 'react-reveal/Fade';


class Cardcontainer extends Component {
  state = {
    drawers: this.props.drawers,
    isId: this.props.match.params.id
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
   const cardsArray = this.state.isId === undefined ? this.state.drawers : this._filter(category);
    // const cardsArray = this.props.category === "All" ?  this.state.drawers : this._filter() ;
    const cards = cardsArray.map((cards, index) => {
      return <Card title = {cards.title} info = {cards.info} img = {cards.img} tag = {cards.tag} url = {cards.url} key = {index} />
    });
    return cards
  }

  render(){
      return(
          <div className = "card-container" id = "card-container" >
            <Fade>
              {this._renderCards(this.props.match.params.id)}
              </Fade>
          </div>
      );
}
}

export default Cardcontainer;