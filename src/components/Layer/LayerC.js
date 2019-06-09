import React from 'react'
import {UserConsumer} from './UserContext'

const LayerC = () => {
  return (
    <UserConsumer>
      {
        username => {return <div>Hei  {username}</div>}
      }
    </UserConsumer>
  )
}

export default LayerC