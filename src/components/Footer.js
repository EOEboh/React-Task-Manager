import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>
            <h3>Copyright
           &copy; {new Date().getFullYear()}
           </h3>
           <Link to='/about'>About</Link>
        </div>
    )
}

export default Footer
