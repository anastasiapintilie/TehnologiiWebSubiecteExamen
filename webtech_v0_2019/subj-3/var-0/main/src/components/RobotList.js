import React, { Component } from 'react'
import RobotStore from '../stores/RobotStore'
import Robot from './Robot'

// TODO : adăugați o componentă Robot 
// afișați o componentă Robot pentru fiecare robot din stare 
// o componentă robot ar trebui să afișeze un robot și să permită ștergerea lui

// TODO : add a Robot component 
// show a Robot component for each robot in the state
// a robot component should show a robot and allow deletion of a robot


class RobotList extends Component {
	constructor(props){
		super(props)
		this.state = {
			robots : []
		}
		this.deleteRobot = (id) => {
			this.store.deleteRobot(id)
		}
	}
	componentDidMount(){
		this.store = new RobotStore()
		this.setState({
			robots : this.store.getRobots()
		})
		this.store.emitter.addListener('UPDATE', () => {
			this.setState({
				robots : this.store.getRobots()
			})			
		})
		
		  this.delete=(id)=>{
            this.store.deleteRobot(id);

        }
	}
  render() {
    return (
      <div>
      	{
      		 this.state.robots.map((e,i)=><Robot key={i} item={e} onDelete={this.delete}/>)
      	}
      </div>
    )
  }
}

export default RobotList
