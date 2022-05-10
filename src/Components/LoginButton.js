import React from 'react'
import { useHistory } from 'react-router'

export default function LoginButton() {
    const history = useHistory();
    return (
        <div className="login-button">
            <button className="standalone" onClick={()=> history.push("/login")}> Login</button>
        </div>
    )
}
