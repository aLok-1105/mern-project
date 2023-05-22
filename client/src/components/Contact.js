import React, { useEffect, useState } from 'react'

export default function Contact() {

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    message:''
  });

  const callAboutPage = async ()=>{
    try {
      const res = await fetch('/getData', {
        method:"GET",
        headers:{
          "Content-Type": "application/json"
        }
      });

      const data = await res.json();
      // console.log(data);
      setUserData({...userData, name:data.name, email:data.email, phone: data.phone});

      if(!res.status === 200){
        throw new Error(res.error);
      }

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    callAboutPage();
  }, []);

  
  const handleInputs = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setUserData({...userData,  [name]:value});
  }

  //send data to backend

  const contactForm = async (e)=>{
    e.preventDefault();

    const {name, email, phone, message} = userData;

    const res = await fetch('/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name, email, phone, message})
    })
    const data = await res.json();

    if(!data){
      console.log("message not sent");
    }
    else{
      alert("Message Sent");
      setUserData({...userData, message: ''});
    }
    
  }



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
          <form className='mt-9' method='POST'>
            <div className="mb-3">
              <input type="name" onChange={handleInputs} name='name' className="form-control" id="name" aria-describedby="emailHelp" value={userData.name}  />
            </div>
            <div className="mb-3">
              <input type="email" onChange={handleInputs} name='email' className="form-control" id="email" aria-describedby="emailHelp" value={userData.email} />
            </div>
            <div className="mb-3">
              <input type="phone" onChange={handleInputs} name='phone' className="form-control" id="phone" aria-describedby="emailHelp" value={userData.phone} />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
              <textarea name='message' onChange={handleInputs} className="form-control" id="exampleFormControlTextarea1" rows="3" value={userData.message} ></textarea>
            </div>
            <div>
              <button type='submit' onClick={contactForm} >Submit</button>
            </div>
          </form>
          </div>
        </div>
      </div>
    </>
  )
}
