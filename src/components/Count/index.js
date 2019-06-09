import React, {useState} from 'react'

const Count = () => {
  const [click,setClick]= useState(0)
  const [hover,setHover]= useState(0)

  return (
    <div>
      <div>
      <button onClick={()=>setClick(click+1)}>click {click} times</button> 
      </div>

      <div>
      <h2 onMouseOver={()=>setHover(hover+1)}>hover {hover} times</h2> 
      </div>

    </div>
  )
}

export default Count
