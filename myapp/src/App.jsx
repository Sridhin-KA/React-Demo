// import React from 'react'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Info from './pages/Info.jsx';
import {Routes,Route} from 'react-router-dom'
import NAvbar from './pages/NAvbar.jsx';
import Register from './pages/Register.jsx'
import Counter from './pages/Counter.jsx'
import Form from './pages/Form.jsx';
import Array from './pages/Array.jsx';
import Effect from './pages/Effect.jsx';
function App(){
    return (
        <div>
            <NAvbar/>

            <Routes>

            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/info' element={<Info/>} />
            <Route path = '/contact' element = {<Contact/>}/>
            <Route path = '/register' element = {<Register/>}/>
            <Route path = '/counter' element = {<Counter/>}/>
            <Route path='/form' element={<Form/>}/>\
            <Route path='/array' element={<Array/>}/>
            <Route path='/effect' element={<Effect/>}/>
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