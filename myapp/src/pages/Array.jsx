import {useState} from 'react'

function Array(){
    const [data,setData] = useState("")
    const [list,setList] = useState([])
    let demo = 'arun'
    const adddata = ()=>{
        setList(list.concat(data))
        setData("")
    }
    return(
        <div>
            <br /><br />
            <input type='text' value={data} onChange={(e)=>setData(e.target.value)} placeholder='Enter a data' />
            <br /><br />
            <button type='submit' onClick={adddata} >Submit</button>
            <h1>
                Data list
            </h1>
            <ul>
                {
                    list.map((i)=>(
                        <li>{i}</li>

                    ))
                }
            </ul>
       
        </div>
    )
}

export default Array