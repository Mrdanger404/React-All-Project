

import { Component } from 'react'

class Event_handler extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       changedValue : ''
    }
  }

  handleChange = (e) => {
    this.setState({
      changedValue : e.target.value
    })
  }

  render() {
    return (
      <>
        <input type='text' onChange={this.handleChange} />
        <p>{this.state.changedValue}</p>
      </>
    )
  }
}


export default Event_handler;