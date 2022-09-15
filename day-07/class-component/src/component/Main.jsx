import React, { Component } from 'react'
import TechList from './TechList'

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
            <TechList />
          </ul>
        </div>
      </main>
    )
  }
}

export default Main