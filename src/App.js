import React, { Component } from 'react';

//class App extends Component
//{
//  render() {
//    return (
//      <div>
//        <label htmlFor="bar">bar</label>
//        <input type="text" onChange={() => {console.log("Clicked!")}}/>
//      </div>
//    )
//  }
//}

const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {count: 0}
  }

  handlePlusButton = () => {
    this.setState({count: this.state.count + 1})
    console.log(this.state.count)
  }

  handleMinusButton = () => {
    this.setState({count: this.state.count - 1})
    console.log(this.state.count)
  }

  render () {
    
    return (
      <React.Fragment>
        <div>count: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>        
      </React.Fragment>
    )
  }
}

export default App;
