import React, { Component } from 'react';
import 'shared/App.css'


var tooltipSwitch = true;
function fadeOut(el){
    el.style.opacity = 1;
  
    (function fade() {
      if ((el.style.opacity -= .1) < 0) {
        el.style.display = "none";
      } else {
        requestAnimationFrame(fade);
      }
    })();
  }
  
  function fadeIn(el, display){
    el.style.opacity = 0;
    el.style.display = display || "block";
  
    (function fade() {
      var val = parseFloat(el.style.opacity);
      if (!((val += .1) > 1)) {
        el.style.opacity = val;
        requestAnimationFrame(fade);
      }
    })();
  }
  
  
  function _callTooltip(){
    var tooltipbox = document.querySelector('.category-tooltipbox');
    if (tooltipSwitch === true){
      fadeIn(tooltipbox);
      tooltipSwitch = !tooltipSwitch;
    } else{
      fadeOut(tooltipbox);
      tooltipSwitch = !tooltipSwitch;
    }
  }

class Category extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            category: [
                "All", "Studio", "UI/UX", "Branding","Etc"
              ],
        };
        this._categoryRemap = this._categoryRemap.bind(this);
        this._setCategoryToParent = this._setCategoryToParent.bind();
    }

    _moveCategory(arr, old_index, new_index) {
        while (old_index < 0) {
            old_index += arr.length;
        }
        while (new_index < 0) {
            new_index += arr.length;
        }
        if (new_index >= arr.length) {
            var k = new_index - arr.length;
            while ((k--) + 1) {
                arr.push(undefined);
            }
        }
         arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);  
       return arr;
    }

    _setCategoryToParent = (category) => {
      this.props.setCategory(category);
      console.log("insetcategorytop = "+category );
    }
    _categoryRemap(e){
      
        const conText = e.target.textContent;
        this._setCategoryToParent(conText);

        const targetIndex = this.state.category.indexOf(conText)
        const newCategory = this._moveCategory(this.state.category, targetIndex, 0)
        this.setState({
            category: newCategory
        });

        const tooltipbox = document.querySelector('.category-tooltipbox');
        fadeOut(tooltipbox);
        tooltipSwitch = !tooltipSwitch;

    }
    
    componentDidMount() {
        document.addEventListener("click", function(event) {
            const tooltipbox = document.querySelector('.category-tooltipbox');
            if (event.target.closest(".category")) return;
              fadeOut(tooltipbox);
              tooltipSwitch = !tooltipSwitch;
            });
        document.querySelector(".category-name-selected").addEventListener("click", _callTooltip);
    }
    render() {
      return (
        <div className = "category">
            
            <div className = "category-name-selected">{this.state.category[0]}</div>
            <div className = "category-tooltipbox">
                <div className = "category-name-deselected" onClick={this._categoryRemap}>{this.state.category[1]}</div>
                <div className = "category-name-deselected" onClick={this._categoryRemap}>{this.state.category[2]}</div>
                <div className = "category-name-deselected" onClick={this._categoryRemap}>{this.state.category[3]}</div>
                <div className = "category-name-deselected" onClick={this._categoryRemap}>{this.state.category[4]}</div>
            </div>
            </div>
      );
    }
  }
  
  export default Category;
  