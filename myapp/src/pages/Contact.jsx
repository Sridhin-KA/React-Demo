
import { useNavigate} from 'react-router-dom'

function Contact(){

    const navigate = useNavigate()
    return(
        <div>
            <style>
                {
                    `
                    h1{
                    color: red;
                }
                    `
                }
            </style>
            <h1>Contact page</h1>
            <button onClick = {()=> navigate('/register')} >Register Page</button>
        </div>
    )
}

export default Contact