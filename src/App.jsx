import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Nav from './Nav'
import Body from './Body'
import SQL from './SQL'
import Python from './python'
import Java from './Java'
import HTML from './HTML'
import R from './R'
import CSS from './CSS'
import JavaScript from './JavaScript'
import TypeScript from './TypeScript'
import C from './C'
import Cplus from './Cplus'
import Chash from './Chash'
import Go from './Go'
import Kotlin from './Kotlin'
import Swift from './Swift'
import DSA from './DSA'
import NumPY from './NumPY'
import Pandas from './Pandas'
import Rust from './Rust'
import Ruby from './Ruby'


function App() {
    return(

        <div>
            <Nav />
            <BrowserRouter>
            <Routes>
                <Route path='/'element={<Body/>}/>
                <Route path='/Python'element={<Python/>}/>
                <Route path='/SQL'element={<SQL/>}/>
                <Route path='/Java'element={<Java/>}/>
                <Route path='/HTML'element={<HTML/>}/>
                <Route path='/R'element={<R/>}/>
                <Route path='/CSS'element={<CSS/>}/>
                <Route path='/JavaScript'element={<JavaScript/>}/>
                <Route path='/TypeScript'element={<TypeScript/>}/>
                <Route path='/C'element={<C/>}/>
                <Route path='/Cplus'element={<Cplus/>}/>
                <Route path='/Chash'element={<Chash/>}/>
                <Route path='/Go'element={<Go/>}/>
                <Route path='/Kotlin'element={<Kotlin/>}/>
                <Route path='/Swift'element={<Swift/>}/>
                <Route path='/DSA'element={<DSA/>}/>
                <Route path='/NumPY'element={<NumPY/>}/>
                <Route path='/Pandas'element={<Pandas/>}/>
                <Route path='/Rust'element={<Rust/>}/>
                <Route path='/Ruby'element={<Ruby/>}/>
                

                
            </Routes>
            </BrowserRouter>

        </div>
    )
    
}

export default App

// import React from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Nav from './Nav'
// import Body from './Body'
// import SQL from './SQL'
// import Python from './Python'
// import Java from './Java'
// import HTML from './HTML'
// import R from './R'
// import CSS from './CSS'
// import JavaScript from './JavaScript'
// import TypeScript from './TypeScript'
// import C from './C'
// import Cplus from './Cplus'
// import Chash from './Chash'
// import Go from './Go'
// import Kotlin from './Kotlin'
// import Swift from './Swift'
// import DSA from './DSA'
// import NumPY from './NumPY'
// import Pandas from './Pandas'
// import Rust from './Rust'
// import Ruby from './Ruby'

// function App() {
//   return (
//     <BrowserRouter>
//       <Nav />   {/* ✅ Nav should be inside BrowserRouter */}
//       <Routes>
//         <Route path="/" element={<Body />} />
//         <Route path="/Python" element={<Python />} />
//         <Route path="/SQL" element={<SQL />} />
//         <Route path="/Java" element={<Java />} />
//         <Route path="/HTML" element={<HTML />} />
//         <Route path="/R" element={<R />} />
//         <Route path="/CSS" element={<CSS />} />
//         <Route path="/JavaScript" element={<JavaScript />} />
//         <Route path="/TypeScript" element={<TypeScript />} />
//         <Route path="/C" element={<C />} />
//         <Route path="/Cplus" element={<Cplus />} />
//         <Route path="/Chash" element={<Chash />} />
//         <Route path="/Go" element={<Go />} />
//         <Route path="/Kotlin" element={<Kotlin />} />
//         <Route path="/Swift" element={<Swift />} />
//         <Route path="/DSA" element={<DSA />} />
//         <Route path="/NumPY" element={<NumPY />} />
//         <Route path="/Pandas" element={<Pandas />} />
//         <Route path="/Rust" element={<Rust />} />
//         <Route path="/Ruby" element={<Ruby />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App
