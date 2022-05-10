import React,{useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import {useAuth} from '../Utils/AuthContext';
import './../styles/styles.css';

export default function Signup() {
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [pincode, setPincode] = useState("");
    const [userName, setUserName] = useState("");
    const [mobile, setMobile] = useState("");
    const [userType, setType] = useState("");
    
    const {signup, addUserData} = useAuth();
    const history = useHistory();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            const {user} = await signup(email, password);
            await addUserData(user.uid, {userName,email,address,city,state,pincode, mobile});
            history.push("/profile");   
            
        } catch(e){
            setError(e.error);
            console.error(e);
        }
    }
    return (
        <div>
            <form autoComplete="false" onSubmit={handleSubmit}>
            <h1> Sign Up</h1>
                {(error)?("Error : "+error):("")} 
                <label htmlFor="userName">
                    Name : 
                    <input value={userName} type="text" name="userName" id="userName" onChange={(e)=>setUserName(e.target.value)} />
                </label>

                <label htmlFor="mobile">
                    Mobile : 
                    <input value={mobile} type="number" name="mobile" id="mobile" onChange={(e)=>setMobile(e.target.value)} />
                </label>
                <label htmlFor="email">
                    Email : 
                    <input value={email} type="email" name="email" id="email" onChange={(e)=>setEmail(e.target.value)} />
                </label>
                <label htmlFor="password">
                    Password : 
                    <input value={password} type="password" name="password" id="password" onChange={(e)=>setPassword(e.target.value)} />
                </label>
                <label htmlFor="address">
                    Address : 
                    <textarea value={address}  name="address" id="address" onChange={(e)=>setAddress(e.target.value)} />
                </label>
                <label htmlFor="city">
                    City : 
                    <input value={city} type="text" name="city" id="city" onChange={(e)=>setCity(e.target.value)} />
                </label>
                <label htmlFor="state">
                    State : 
                    <input value={state} type="text" name="state" id="state" onChange={(e)=>setState(e.target.value)} />
                </label>
                <label htmlFor="buysell">
                    You want to?<br/>
                    <div className='userTypeSignup'>
                        Buy : 
                        <input value={userType} type="radio" name="buysell" id="buysell" onChange={(e)=>setState(e.target.value)} />
                        Sell : 
                        <input value={userType} type="radio" name="buysell" id="buysell" onChange={(e)=>setState(e.target.value)} />
                    </div>
                </label>
                <label htmlFor="pincode">
                    Pincode : 
                    <input value={pincode} type="text" name="pincode" id="pincode" onChange={(e)=>setPincode(e.target.value)} />
                </label>

                <input type="submit" value="Sign up" />

                
                Already a member? <Link to="/login">Login</Link>
            </form>
        </div>
    )
}
