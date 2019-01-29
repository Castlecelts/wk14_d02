import React, { Component } from 'react';
import PotterSelector from '../components/PotterSelector.js';
import PotterDetail from '../components/PotterDetail.js';

class PotterContainer extends Component{

  constructor(props){
    super(props);
    this.state = {
      characters: [],
      currentCharacter: null
    }

    this.handlePotterSelected = this.handlePotterSelected.bind(this);
  }

  componentDidMount(){
    const url = 'http://hp-api.herokuapp.com/api/characters';
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('load', () => {
      const jsonString = request.responseText;
      const potterObjects = JSON.parse(jsonString);
      this.setState({ characters: potterObjects });
    })
    request.send();
  }

  handlePotterSelected(index){
    const selectedPotter = this.state.characters[index];
    this.setState({currentCharacter: selectedPotter});
  }


  render(){
    return(
      <>
      <h1>Potter Characters Galore</h1>
      <PotterSelector characters={this.state.characters}
      onPotterSelected={this.handlePotterSelected}/>
      <PotterDetail currentCharacter={this.state.currentCharacter}/>
      </>
    )
  }

}
export default PotterContainer;
