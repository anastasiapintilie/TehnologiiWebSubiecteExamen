import React, { Component } from 'react'
import RobotList from './RobotList'
import RobotForm from "./RobotForm"


class App extends Component {
  render() {
    return (
      <div>
      //!!!!!!!!!!!!!!!!!!!!!!!!!!!
      <RobotForm/>
      	A list of robots
      	<RobotList />
      </div>
    )
  }
}

export default App
