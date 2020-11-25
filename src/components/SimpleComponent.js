// Code SimpleComponent Here
import React from 'react'

class SimpleComponent extends React.Component{

  constructor(){
    super()
    this.state ={
      mood: 'happy'
    }
  }

  handleClick = () => {
    let moodChange; 
     this.state.mood === 'happy' ? moodChange = 'sad' : moodChange = 'happy'
    this.setState({
      mood: moodChange
    })

  }

  render(){
    return(
      <div onClick={this.handleClick}>{this.state.mood}</div>
    )
  }

}

export default SimpleComponent