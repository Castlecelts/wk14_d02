import React from 'react';


const PotterDetail = (props) => {

  if (!props.currentCharacter) return null;
    return(
      <>
      <p>Character: {props.currentCharacter.name}</p>
      <p>Species: {props.currentCharacter.Species}</p>
      <img src={props.currentCharacter.image}/>
      </>
    )



}

export default PotterDetail;
