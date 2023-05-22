import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Logout() {

  const history = useNavigate();

    // promises
    useEffect(()=>{
        fetch('/logout', {
            method:"GET",
        headers:{
          Accept:'application/json',
          "Content-Type": "application/json"
        },
        credentials:'include'
        }).then((res)=>{
            history('/login', {replace:true});
            if(!res.status === 200){
                throw new Error(res.error);
              }
        }).catch((err)=>{
            console.log(err);
        });
    });

  return (
    <div></div>
  )
}
