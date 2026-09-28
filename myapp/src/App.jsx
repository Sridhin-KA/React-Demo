// import React from 'react'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Info from './pages/Info.jsx';
import {Routes,Route} from 'react-router-dom'
import NAvbar from './pages/NAvbar.jsx';

function App(){
    return (
        <div>
            <NAvbar/>

            <Routes>

            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/info' element={<Info/>} />

            </Routes>
        
        </div>
    )
}
export default App
// import React,{Component} from 'react'

// class App extends Component{
//     render(){
//         return(
//             <div>
//                 <h1>Hello React page</h1>
//             </div>
//         )
//     }
// }
// export default App