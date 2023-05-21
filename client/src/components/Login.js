import React from 'react'

export default function Login() {
  return (
    <>
      <div>
        <div className='container'>
        <h2 className='form-title'>Login</h2>
        <form>
        <div class="mb-3">
                <label for="email" class="form-label"><i class="zmdi zmdi-account zmdi-hc-1x me-2" />Email address</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label"><i class="zmdi zmdi-account zmdi-hc-1x me-2" />Password</label>
                <input type="password" class="form-control" id="password" aria-describedby="emailHelp" />
              </div>
  <button type="submit" class="btn btn-primary">Log In</button>
</form>
        </div>
      </div>
    </>
  )
}
