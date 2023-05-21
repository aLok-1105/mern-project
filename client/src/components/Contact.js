import React from 'react'

export default function Contact() {
  return (
    <>
      <div>
        <div className='container-fluid my-100'>
          <div className='row '>
            <div className=' d-flex justify-content-between col-lg-10 offset-1'>
              <div className='contact-info-item d-flex justify-content-start align-items-center'>
                <img src='' alt='img' />
                <div>
                  <div className='contact-info-title'>
                    Phone
                  </div>
                  <div className='contact-info-text'>
                    +845613133
                  </div>
                </div>
              </div>
              <div className='contact-info-item d-flex justify-content-start align-items-center'>
                <img src='' alt='img' />
                <div>
                  <div className='contact-info-title'>
                    Phone
                  </div>
                  <div className='contact-info-text'>
                    +845613133
                  </div>
                </div>
              </div>
              <div className='contact-info-item d-flex justify-content-start align-items-center'>
                <img src='' alt='img' />
                <div>
                  <div className='contact-info-title'>
                    Phone
                  </div>
                  <div className='contact-info-text'>
                    +845613133
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div>
          <form className='mt-9'>
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
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
</form>
          </div>
        </div>
      </div>
    </>
  )
}
