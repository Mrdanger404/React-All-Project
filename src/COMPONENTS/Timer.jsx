import { Component } from "react";



class Counter extends Component {
    state = { 
        count: 0
     } 

     intervalId = null


     SetTimer = (e) =>{
        console.log(e.target.value)
        if (e.target.value === null) {
            this.setState({count: 0})
        } else {
            this.setState({count: parseInt(e.target.value)})
        }

     }
     increment = (e) =>{
            e.preventDefault()
            this.setState({count: this.state.count +1})
        
     }
     decrement = (e) =>{
        e.preventDefault()
        if (this.state.count > 0) {
            this.setState({count: this.state.count -1})
        }
     }

     startTimer = () => {
        if (this.state.count > 0) {
            this.intervalId = setInterval(() => {
                this.setState({count: this.state.count -1},()=>{
                    if (this.state.count === 0) {
                        alert("Timer is finished")
                        clearInterval(this.intervalId)
                    }
                })
            }, 1000);
        }
     }

     stopTimer = () => {
        if (this.intervalId) {
            clearInterval(this.intervalId)
        }
     }

     resetTimer = () => {
        this.setState({count: 0})
        clearInterval(this.intervalId)
       
     }
    render() { 
        return (
            <div className="container">
                <h1>{this.state.count} Second</h1>
                <form>
                <input onChange={this.SetTimer} type="number"/>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.increment}>+</button>
                <input type="reset" onClick={this.resetTimer}></input>
                </form>
                
                <div>
                    <button onClick={this.startTimer}>Start</button>
                    <button onClick={this.stopTimer}>Stop</button>
                </div>
            </div>
        );
    }
}
 
export default Counter;