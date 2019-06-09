import React from 'react'
import LayerA from '../Layer/LayerA'

function Child(props){   
  return (
    <div>
      <LayerA />
      <button onClick={() => props.greetHandler('Child')} >Greet Parent</button>
      <br/><br/>
      <button onClick={props.toggleHandler}>click to change the state</button>
    </div>
  )
}

export default Child


