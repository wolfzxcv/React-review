import React from 'react'

const Musician = ({musician}) => {
  return (
    <div>
      <h2>
         Jeg er {musician.name}. Jeg er {musician.age} år gammel. Jeg liker {musician.instrument}.
      </h2>
    </div>
  )
}

export default Musician
