import React from 'react';


const PotterSelector = (props) => {
  console.log(props);
  const banana = props.characters.map((character, index) => {
    return <option value={index} key={index}>{character.name}</option>
  })


  function handleChange(event){
    props.onPotterSelected(event.target.value);
  }



  return(
    <select id="potter-selector" onChange={handleChange} defaultValue="default">
    <option disabled value="default">Choose a potter!</option>
    {banana}
    </select>
  )


}

export default PotterSelector;
