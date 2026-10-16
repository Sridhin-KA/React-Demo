import {useState } from 'react'

function Form(){

    const [name,setName] = useState("")

    const namecheck = (e)=>{
        e.preventDefault()
        let og_name = 'Demo'
        if (name===og_name){
            alert("name is match")
        }
        else{
            alert("no match")
        }
    }

    return(
        <div>
            <form onSubmit={namecheck} >
            <input type="text" onChange={(e)=> setName(e.target.value) }  name="" id="" placeholder='Enter Your name' />
            <br /><br />
            <button type='submit'>Submit</button>
            </form>
            <h2>{name}</h2>

        </div>
    )
}

export default Form