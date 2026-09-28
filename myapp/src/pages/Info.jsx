import './Info.css'
import NAvbar from './NAvbar'

function Info(){

    let fruits = ['apple','orange','mango','kiwi']
        
    return(
        <div>
            <NAvbar/>
            <h2> Fruit list </h2>

            <ol>
                {
                    fruits.map((index,i,x)=>(
                        <li key={index} >{x}</li>
                    ))
                }

            </ol>
        </div>
    )
}

export default Info