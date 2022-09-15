import React from 'react'

// Class based component
class Header extends React.Component {
    constructor(props) {
        super(props)
        // The code inside the constructor runs before any other code
    }
    render() {
        return (
            <header>
                <div className="header_wrapper">
                    <h1>Welcome to Day 07 - Class Component</h1>
                    <h2>Getting Started with React</h2>
                    <h3>JavaScript Library</h3>
                    <p>Alhassan Joshua</p>
                    <small>15th September, 2022</small>
                </div>
            </header>
        )
    }
}

export default Header