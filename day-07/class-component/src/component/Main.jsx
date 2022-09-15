import React, { Component } from 'react'
import TechList from './TechList'
import UserCard from './image/UserCard'
import Button from './Button'

// CSS styles in JavaScript Object
const buttonStyles = {
  backgroundColor: '#61dbfb',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: 3,
  cursor: 'pointer',
  fontSize: 18,
  color: 'white',
}

class Main extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <main>
        <div className="main-wrapper">
          <p>Prerequisite to get started with react.js</p>
          <ul>
            <TechList techs={this.props.techs} />
          </ul>
          <UserCard user={this.props.user} />
          <Button 
            text='Greet People'
            onClick={this.props.greetPeople}
            style = {buttonStyles}
          />
          <Button 
            text='show Time'
            onClick={this.props.handleTime}
            style = {buttonStyles}
          />
        </div>
      </main>
    )
  }
}

export default Main