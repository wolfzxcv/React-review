import React from 'react'

function Child(props){   
  return (
    <div>
      <button onClick={() => props.greetHandler('Child')} >Greet Parent</button>
      <br/><br/>
      <button onClick={props.toggleHandler}>click to change the state</button>
    </div>
  )
}

export default Child


