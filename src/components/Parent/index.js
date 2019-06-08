import React, { Component } from 'react'
import Child from '../Child'

class Parent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       parent: 'Parent',
       isLogIn: false
    }
    this.greetParent=this.greetParent.bind(this)
    this.toggleStatus=this.toggleStatus.bind(this)
  }
  
  greetParent (childPara){
    alert(`Hei, jeg er fra ${this.state.parent} og du er fra ${childPara}!`)
  }

  toggleStatus(){
    this.setState({
      isLogIn: !this.state.isLogIn
    })
  }
  render() {
    return (
      <div>
        <Child greetHandler={this.greetParent} toggleHandler={this.toggleStatus} />
    {this.state.isLogIn ? 
    <div>Logg inn nå</div> : <div>Logg ut nå</div> }   
    {this.state.isLogIn && <h2>Velkommen igjen, folk!!</h2>}    
      </div>
    )
  }
}

export default Parent



 


