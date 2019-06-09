import React, {useState} from 'react'

const Form = () => {
  const [input, setInput] = useState('')
  const [comment, setComment] = useState('') 
  const [inst, setInst] = useState('Drum')

  return (
    <div>
      <form onSubmit={ e=> (alert(`${input} ${comment} ${inst}`), e.preventDefault())}>
        <div>
          <label>username</label>
          <input type="text" value={input} onChange={e=> setInput(e.target.value)} />
        </div>

        <div>
          <label>comment</label>
          <textarea value={comment} onChange={e=> setComment(e.target.value)} ></textarea>
        </div>

        <div>
        <label>instrument</label>
          <select value={inst} onChange={e=> setInst(e.target.value)} >
            <option value="Guitar">Guitar</option>
            <option value="Bass">Bass</option>
            <option value="Drum">Drum</option>
          </select>  
        </div>
        <button type='submit'>Submit</button>
      </form>

    </div>
  )
}

export default Form
