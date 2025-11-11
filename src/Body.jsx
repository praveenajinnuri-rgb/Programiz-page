import React from 'react'
import './Body.css'
import { useNavigate } from 'react-router-dom'




function Body(){
    var navigate = useNavigate()

    return(
        <div>
            <h1 id='h1'>Learn Programiz For Free</h1>

            <div id='div1'>
            <button className='btn1' onClick={()=> navigate('/Python')}>Python</button>
            <button className='btn1' onClick={()=> navigate('/SQL')}>SQL</button>
            <button className='btn1' onClick={()=> navigate('/R')}>R</button>
            <button className='btn1' onClick={()=> navigate('/HTML')}>HTML</button>
            <button className='btn1' onClick={()=> navigate('/CSS')}>CSS</button>
            <button className='btn1' onClick={()=> navigate('/JavaScript')}>JavaScript</button>
        </div>
         <div id='div2'>
            <button className='btn2' onClick={()=> navigate('/TypeScript')}>TypeScript</button>
            <button className='btn2' onClick={()=> navigate('/Java')}>Java</button>
            <button className='btn2' onClick={()=> navigate('/C')}>C</button>
            <button className='btn2' onClick={()=> navigate('/Cplus')}>C++</button>
            <button className='btn2' onClick={()=> navigate('/Chash')}>C#</button>
            <button className='btn2' onClick={()=> navigate('/Go')}>Go</button>
        </div>

        <div id='div3'>
            <button className='btn3' onClick={()=> navigate('/Kotlin')}>Kotlin</button>
            <button className='btn3' onClick={()=> navigate('/Swift')}>Swift</button>
            <button className='btn3' onClick={()=> navigate('/DSA')}>DSA</button>
            <button className='btn3' onClick={()=> navigate('/NumPY')}>NumPY</button>
            <button className='btn3' onClick={()=> navigate('/Pandas')}>Pandas</button>
            <button className='btn3' onClick={()=> navigate('/Rust')}>Rust</button>
        </div>

       <div id='div4'>
            <button className='btn4'onClick={()=> navigate('/Ruby')}>Ruby</button>
        </div>  
        
            
        </div>
    )
}
export default Body
// onClick={()=> navigate('/Ruby')}>Ruby</button>

