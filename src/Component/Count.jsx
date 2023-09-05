
import { Component } from 'react'





class Count extends Component {


    constructor(props) {
        super(props)
      
        this.state = {
           count : 0
        }
      }

      increment = () => {
        this.setState({
            count : this.state.count + 1
        })
      }
      decrement = () => {
        this.setState({
            count : this.state.count - 1
        })
      }

  render() {

    const {count} = this.state

    return (
      <div>
            <h1>Count : {count}</h1>
            <button onClick={this.increment} disabled={count === 5 ? true : false}>Increase</button>
            <button onClick={this.decrement} disabled={count === 0 ? true : false}>Decrement</button>
      </div>
    )
  }
}

export default Count;