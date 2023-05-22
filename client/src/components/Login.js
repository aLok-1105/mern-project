import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const history = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (event)=>{
    event.preventDefault();

    const res = await fetch('/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({email, password})
    })
    
    const data = await res.json();
    // console.log(data);
    // console.log(res);

    if(res.status === 400 || !data) {
      window.alert("Invalid Credentials");
    }
    else{
      window.alert("Login Successful");

      history("/");
    }
  }


  return (
    <>
      <div>
        <div className='container'>
        <h2 className='form-title'>Login</h2>
        <form method="POST">
        <div className="mb-3">
                <label htmlFor="email" className="form-label"><i className="zmdi zmdi-account zmdi-hc-1x me-2" />Email address</label>
                <input type="email" name='email' className="form-control" value={email} onChange={(event)=>setEmail(event.target.value)} id="email" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label"><i className="zmdi zmdi-account zmdi-hc-1x me-2" />Password</label>
                <input type="password" name='password' className="form-control" value={password} onChange={(event)=>{setPassword(event.target.value)}} id="password" aria-describedby="emailHelp" />
              </div>
  <button type="submit" onClick={loginUser} className="btn btn-primary" id='login'>Log In</button>
</form>
        </div>
      </div>
    </>
  )
}
