import React from 'react'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({title, showForm}) => {

    const location = useLocation();

    return (
        <div className='header'>
           <h1>
               {title}  
           </h1> 
           {/* values for color and text */}
          { location.pathname ==='/' && <Button color='#4b4b4b' text= 'Add' onClick={showForm} />}
        </div>
    )
}
Header.defaultProps = {
    title: 'Task Manager',
    name: 'Onyeka'
}
export default Header
