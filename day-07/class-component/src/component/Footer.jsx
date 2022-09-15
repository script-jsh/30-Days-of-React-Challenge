import React, { Component } from 'react'

export class Footer extends Component {
    showDate = (time) => {
        const months = [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ]
    
        const month = months[time.getMonth()].slice(0, 3)
        const year = time.getFullYear()
        const date = time.getDate()
        return ` ${month} ${date}, ${year}`
      }

      handleTime = () => {
        alert(this.showDate(new Date()))
      }
      
      greetPeople = () => {
        alert('Welcome to 30 Days Of React Challenge, 2020')
      }

    constructor(props) {
        super(props)
    }

    render() {
    return (
      <footer>
        <div className="footer-wrapper">
            <p>Copyright {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    )
  }
}

export default Footer