import { useEffect,useState } from "react";
import axios from 'axios'
import api from "./api";
function Effect(){

    const [users,setUsers] = useState([])

    // useEffect(()=>{
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then((res)=>res.json())
           
        
    //     .then((data)=>setUsers(data))
        
    // },[])

    useEffect(()=>{
           api.get('/users')
            .then((res)=>{
                console.log(res);
                
                setUsers(res.data)
            })
            .catch((err)=>{
                console.log(err);
                
            })
    },[])
    return(
        <div>
                <h1>user List</h1>

                <ul>
                    {
                        users.map((item)=>(
                            <li>{item.name}</li>

                        ))
                    }
                </ul>
        </div>
    )
}

export default Effect