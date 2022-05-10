import React,{useState, Component} from 'react'
import { Link, useHistory } from 'react-router-dom';
import {useAuth} from '../Utils/AuthContext';
import GoogleMapReact from 'google-map-react';

export default function Takeaway() {
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [userName, setUserName] = useState("");
    const [mobile, setMobile] = useState("");
    
    const {signup, addUserData} = useAuth();
    const history = useHistory();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            const {user} = await signup(email, password);
            await addUserData(user.uid, {userName,email,address,city, mobile});
            history.push("/profile");   
            
        } catch(e){
            setError(e.error);
            console.error(e);
        }
    }
    const onCall = () => () => {
        alert("We will call you back!!");
        console.log('done!')
    };
    return (
        <div className="takeaway">
            <form autoComplete="false" onSubmit={handleSubmit}>
            <h1> Book a ride</h1>
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
                    Source : 
                    <input value={email} type="text" name="email" id="email" onChange={(e)=>setEmail(e.target.value)} />
                </label>
                <label htmlFor="password">
                    Destination : 
                    <input value={password} type="text" name="password" id="password" onChange={(e)=>setPassword(e.target.value)} />
                </label>
                <label htmlFor="address">
                    Approx Distance : 
                    <textarea value={address}  name="number" id="address" onChange={(e)=>setAddress(e.target.value)} />
                </label>
                <label htmlFor="city">
                    Members : 
                    <input value={city} type="number" name="city" id="city" onChange={(e)=>setCity(e.target.value)} />
                </label>
                

                <button onClick={onCall()}>Confirm</button>

                
                Go back to menu <Link to="/products">Products</Link>
            </form>
        </div>
    )
}