import React,{useState} from 'react'
import { Link, useHistory } from 'react-router-dom';
import {useAuth} from '../Utils/AuthContext';
import './../styles/styles.css';
import people from './../img/people.png';
import artist from './../img/artist.png';

export default function Login() {
    // const [error, setError] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const {login} = useAuth();
    // const history = useHistory();

    // const handleSubmit = async (e)=>{
    //     e.preventDefault();
    //     try{
    //         await login(email, password)
    //         history.push("/profile")
            
    //     } catch(e){
    //         setError(e.message);
    //         console.error(e);
    //     }
    // }
    const x = ()=>{
        try{
            console.log('hehe');
        }catch(error){
            console.log(error.message);
        }
    }
    return (
        <div className='masterWrapper'>
            <div className='c1'>
                <form onSubmit={x}>
                    <h1>Are you a Customer?</h1>
                    {/* {(error)?(error):(<></>)}  */}
                    <img src={people}/>
                    <br/>
                    {/* <input type="submit" value="Login" /> */}
                    <Link className='noUnderline' to="/login1" ><button >Login</button></Link>
                </form>
            </div>
            <div className='c1'>
                <form onSubmit={x}>
                    <h1>Are you an Artist?</h1>
                    {/* {(error)?(error):(<></>)}  */}
                    <img src={artist}/>
                    <br/>
                    <Link className='noUnderline' to="/login1" ><button >Login</button></Link>
                </form>
            </div>
            
            <div className='resetPassDiv'>
                <Link className='noUnderline' to="/resetPassword" ><button>Forgot Password</button></Link>
            </div>
        </div>
        
    )
}


// bekup
{/* <label htmlFor="email">
    Email : <br/>
    <input value={email} type="email" name="email" id="email" onChange={(e)=>setEmail(e.target.value)} />
</label>
<label htmlFor="password">
    Password : <br/>
    <input value={password} type="password" name="password" id="password" onChange={(e)=>setPassword(e.target.value)} />
</label> */}