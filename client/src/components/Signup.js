import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Signup() {

  const history = useNavigate();

  const [user, setUser] = useState({
    name: '',
    email:'',
    phone: '',
    work: '',
    password: '',
    cpassword: ''
  })

  var name, value;

  const handleInputs = (event)=>{
    name = event.target.name;
    value = event.target.value;
    setUser({...user, [name]:value});
  }

  const postData = async (event)=> {
    event.preventDefault();
    const {name, email, phone, work, password, cpassword} = user;

    const res = await fetch('/register', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name, email, phone, work, password, cpassword})
    });

    const data = await res.json();

    if(res.status === 422 || !data) {
      window.alert("Invalid Registration");
    }
    else{
      window.alert("Registration Successful");

      history("/login");
    }
  } 

  return (
    <>
    <section className='signup'>
      <div className='container mt-5'>
        <div className='signup-content'>
          <div className='signup-form' >
            <h2 className='form-title'>Create your account</h2>
            <form method='POST'>
              <div className="mb-3">
                <label htmlFor="name" className="form-label"><i className="zmdi zmdi-account zmdi-hc-1x me-2"></i>Name</label>
                <input type="name" className="form-control" name='name' id="name" value={user.name} onChange={handleInputs} aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label"><i className="zmdi zmdi-account zmdi-hc-1x me-2" />Email address</label>
                <input type="email" className="form-control" name='email' id="email" value={user.email} onChange={handleInputs} aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label"><i className="zmdi zmdi-account zmdi-hc-1x me-2" />Phone</label>
                <input type="phone" className="form-control" name='phone' value={user.phone} onChange={handleInputs} id="phone" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="work" className="form-label"><i className="zmdi zmdi-account zmdi-hc-1x me-2" />Profession</label>
                <input type="work" className="form-control" name='work' value={user.work} onChange={handleInputs} id="work" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label"><i className="zmdi zmdi-account zmdi-hc-1x me-2" />Password</label>
                <input type="password" className="form-control" name='password' value={user.password} onChange={handleInputs} id="password" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="cpassword" className="form-label"><i className="zmdi zmdi-account zmdi-hc-1x me-2" />Confirm Password</label>
                <input type="password" className="form-control" name='cpassword' value={user.cpassword} onChange={handleInputs} id="cpassword" aria-describedby="emailHelp" />
              </div>
              <button type="submit" name="signup" id='signup' onClick={postData} className="btn btn-primary">Submit</button>
      </form>

          </div>
        </div>
      </div>
    </section>
      
    </>
  )
}
