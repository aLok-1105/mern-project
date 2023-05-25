import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

export default function Login() {


  const {state, dispatch} = useContext(UserContext);

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
      dispatch({type: "USER", payload:true});
      window.alert("Login Successful");
      history("/");
    }
  }


  return (
    <>

      <div className='container form-cont'>
        

        {/* <div className='image-cont'> */}
          <img className='login-img' src='https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?w=740&t=st=1685023246~exp=1685023846~hmac=6784aa5788cf6aee25971f82df15dac124862ea7027aff7743500d21a10eb66b' alt=''/>
        {/* </div> */}
        <div className='container login-text-cont '>
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
<button type="submit" onClick={loginUser} id='login' class="button-89" >Log In</button>
              
</form>
        </div>
      </div>
    </>
  )
}
