import './Info.css'

function Info(){

    let fruits = ['apple','orange','mango','kiwi']
        
    return(
        <div>
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