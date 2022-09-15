import React from 'react'

// Class based component
class Header extends React.Component {
    constructor(props) {
        super(props)
        // The code inside the constructor runs before any other code
    }
    render() {
        console.log(this.props.data)
        const {
            welcome,
            title,
            subtitle,
            author: {firstName, lastName},
            date,
        } = this.props.data
        return (
            <header>
                <div className="header_wrapper">
                    <h1> {welcome} </h1>
                    <h2> {title} </h2>
                    <h3> {firstName} {lastName} </h3>
                    <small> {date} </small>
                </div>
            </header>
        )
    }
}

export default Header