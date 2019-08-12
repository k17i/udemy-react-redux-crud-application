import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

const App = () => {
  const profiles=[
    {name: "Taro", age: 10},
    {name: "Hanakko", age: 5},
    {name: "NoName", age:11}    
  ]
  return (
  <div>
    {
      profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index} />
      })
    }
  </div>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name}. {props.age} years old.</div>
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}
export default App;
