import React from 'react'

export default function Signup() {
  return (
    <>
    <section className='signup'>
      <div className='container mt-5'>
        <div className='signup-content'>
          <div className='signup-form' >
            <h2 className='form-title'>Create your account</h2>
            <form >
              <div class="mb-3">
                <label for="name" class="form-label"><i class="zmdi zmdi-account zmdi-hc-1x me-2"></i>Name</label>
                <input type="name" class="form-control" id="name" aria-describedby="emailHelp" />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label"><i class="zmdi zmdi-account zmdi-hc-1x me-2" />Email address</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" />
              </div>
              <div class="mb-3">
                <label for="phone" class="form-label"><i class="zmdi zmdi-account zmdi-hc-1x me-2" />Phone</label>
                <input type="phone" class="form-control" id="phone" aria-describedby="emailHelp" />
              </div>
              <div class="mb-3">
                <label for="work" class="form-label"><i class="zmdi zmdi-account zmdi-hc-1x me-2" />Profession</label>
                <input type="work" class="form-control" id="work" aria-describedby="emailHelp" />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label"><i class="zmdi zmdi-account zmdi-hc-1x me-2" />Password</label>
                <input type="password" class="form-control" id="password" aria-describedby="emailHelp" />
              </div>
              <div class="mb-3">
                <label for="cpassword" class="form-label"><i class="zmdi zmdi-account zmdi-hc-1x me-2" />Confirm Password</label>
                <input type="password" class="form-control" id="cpassword" aria-describedby="emailHelp" />
              </div>
              <button type="submit" name="signup" id='signup' class="btn btn-primary">Submit</button>
      </form>

          </div>
        </div>
      </div>
    </section>
      
    </>
  )
}
