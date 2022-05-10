import React,{useState} from 'react'
import { Link, useHistory } from 'react-router-dom';
import {useAuth} from '../Utils/AuthContext';
import './../styles/styles.css';

const Login1=()=>{
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {login} = useAuth();
    const history = useHistory();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            await login(email, password)
            history.push("/profile")
            
        } catch(e){
            setError(e.message);
            console.error(e);
        }
    }



    return(
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <h1>Please provide your details</h1>
                    {(error)?(error):(<></>)} 
                    <label htmlFor="email">
                        Email : <br/>
                        <input value={email} type="email" name="email" id="email" onChange={(e)=>setEmail(e.target.value)} />
                    </label>
                    <label htmlFor="password">
                        Password : <br/>
                        <input value={password} type="password" name="password" id="password" onChange={(e)=>setPassword(e.target.value)} />
                    </label>
                    <br/>
                    <input type="submit" value="Login" />
                </form>
            </div>
        </div>
    )
}


export default Login1