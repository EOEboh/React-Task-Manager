import React from 'react'

function Button({color,text, onClick}) {

    return (
        <div>
           <button style = {{backgroundColor: color}} 
           onClick={onClick} className='Add-btn' >
               {text}
           </button> 
        </div>
    )
}

Button.defaultProps = {
    text: 'yeah',
    color: 'black'
}
export default Button
