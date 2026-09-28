import './About.css'

function About(){
   
    let logedin = false

    if (logedin){
        return <h1>Welcome user</h1>
    }
    else{
        return <h1>Please login</h1>
    }
}  
export default About