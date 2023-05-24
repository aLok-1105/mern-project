import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export default function About() {

  const history = useNavigate();
  const [userData, setUserData] = useState('');

  const callAboutPage = async ()=>{
    try {
      const res = await fetch('/about', {
        method:"GET",
        headers:{
          Accept:'application/json',
          "Content-Type": "application/json"
        },
        credentials:'include'
      });

      const data = await res.json();
      // console.log(data);
      setUserData(data);

      if(!res.status === 200 || data){
        throw new Error(res.error);

      }

    } catch (error) {
      console.log("error");
      history("/login");
    }
  }

  useEffect(()=>{
    callAboutPage();
  }, []);

  return (
    <>
      <div className='container'>
        <form method='GET'>
          <div className='row'>
            <div className='col-md-4'>
              <img src=' ' alt='img' />
            </div>
            <div className='col-md-6'>
              <div className='profile'>
                <h5>{userData.name}</h5>
                <p>rank</p>
                <ul className="nav nav-tabs">
                      <li className="active"><Link href="#home">Home</Link></li>
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
                      <label>{userData.name}</label>
                    </div>
                    <div className='col-md-6'>
                      <label>{userData.email}</label>
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
