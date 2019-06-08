import React from 'react'
import Musician from '../Musician';

const Name = () => {
  const data =[ 'Aleksi', 'Henkka', 'Jaska']
  const musicians =[
  { 
    id: 1,
    name: 'Morten',
    age: 35,
    instrument: 'drums'
  },
  { 
    id: 2,
    name: 'Janne',
    age: 39,
    instrument: 'keyboard'
  },
  { 
    id: 3,
    name: 'Chris',
    age: 46,
    instrument: 'drums'
  },
]
  const musicianList = musicians.map( 
        musician => <Musician key={musician.id} musician={musician} />)
  return (
    <div>
      { data.map( (x, idx) => <h1 key={idx}>{idx} {x}</h1>) }
      { musicianList }
    </div>
  )
}

export default Name
 