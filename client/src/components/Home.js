import React, { useEffect, useState } from 'react'

export default function Home() {

  const [userData, setUserData] = useState('');
  const [show, setShow] = useState(false);

  const callHomePage = async ()=>{
    const res = await fetch('/getData', {
      method: 'GET',
      headers:{
        "Content-Type": 'application/json'
      }
    });

    const data = await res.json();
    setUserData(data);
    setShow(true);
  }

  useEffect(()=>{
    callHomePage();
  }, []);

  return (
    <>
        <p>Hello</p>
        <h2>{userData.name}</h2>
        <h1>{show?'Hello':'MERN Developer'}</h1>
    </>
  )
}
