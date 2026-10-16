import { useState,useEffect } from 'react'
function Counter(){
   

        const [count, setCount]  = useState(0)
        
        let message;

        if (count %2 === 0){
            message = "number is even"
        }
        else{
            message = 'number is odd'
        }

        const reducecount = ()=>{
            if (count>0){
                setCount(count-1)
            }
        }
        
        useEffect(()=>{
            console.log('count variable changed');
            
        },[count])

        return(

        <div>

        <h1>Count:{count}</h1>


        <h2>{
            message
            }</h2>

            
        <button onClick = {()=> setCount(count+1)} >Add</button>
        <button onClick={reducecount}>Reduce</button>

        </div>
    )
}   
export default Counter