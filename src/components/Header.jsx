import React from 'react'

function Header({text}) {
    return (
        <div>
            <h1 style={{background:'grey'}}>{text}</h1>
        </div>
    )
}

Header.defaultProps = {
    text: 'Feedback UI'
}
export default Header
