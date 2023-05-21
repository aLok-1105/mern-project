import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      <div className='container'>
        <form method=''>
          <div className='row'>
            <div className='col-md-4'>
              <img src=' ' alt='img' />
            </div>
            <div className='col-md-6'>
              <div className='profile'>
                <h5>Name</h5>
                <p>rank</p>
                <ul class="nav nav-tabs">
                      <li class="active"><Link href="#home">Home</Link></li>
                      <li><Link href="#timeline">Menu 1</Link></li>
                    </ul>
              </div>
            </div>
            <div className='col-md-2'>
              <div className='edit-profile'>
                <button type='button' >Edit profile</button>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-4'>
              <div>
                <p>Work Links</p>
                <Link href='#'>Insta</Link>
              </div>
            </div>
            <div className='col-md-8 pl-5'>
              <div className='tab-content' id='tab-content'>
                <div id='home'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <label>Name</label>
                    </div>
                    <div className='col-md-6'>
                      <label>Name</label>
                    </div>

                  </div>
                </div>
                <div id='#timeline'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <label>Timeline</label>
                    </div>
                    <div className='col-md-6'>
                      <label>Name</label>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
