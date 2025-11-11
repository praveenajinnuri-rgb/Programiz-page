import React from 'react'
import "./Nav.css"

function Nav(){
    return(
        <div className='Nav'>
            <div id='bold'>
                <h3><b className='b'>P</b>rogramiz</h3>
            </div>
            <h3>Tutorials</h3>
            <h3>Examples</h3>
            <h3>Courses</h3>
            <input placeholder='🔍search' type="text" />
            <button id='Login'>Login to pro</button>

        </div>
    ) 
}
export default Nav