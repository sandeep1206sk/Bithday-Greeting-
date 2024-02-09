import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
export default function Form() {

    const navigate = useNavigate();
    const [name,setName]= useState("")
    const [email,setEmail]= useState("")

  const handlesubmit = ()=>{
    localStorage.setItem("name",name)
    localStorage.setItem("email",email)
    navigate("/baloon");
  }
  
    return (
      <>
        <form className="w-50 m-auto mt-5 border border-2 border-info-subtle p-5 rounded-4 shadow-lg">
        <div className='text-center mb-3'>
            <i className="fa-solid fa-cake-candles fs-1"  style={{color: "#52c5ff",}}></i>
    
                </div>
            <h1 className="text-center mb-5 fs-3 fw-bold">Birthday Greeting</h1>
            <div className="form-floating mb-3 border border-info rounded">
            <input
            onChange={(e) =>setName(e.target.value)}
            type="text"
            id="floatingInput"
            placeholder="name"
            className="form-control"
            />
            <label for="floatingInput">Name</label>
            </div>
            <div className="form-floating mb-3 border border-info rounded">
            <input
            onChange={(e) =>setEmail(e.target.value)}
            type="email"
            id="floatingEmail"
            placeholder="email"
            className="form-control"
            />
            <label for="floatingEmail">Email</label>
            </div>
            <div className="form-floating mb-3">
    
            <button
            className="btn btn-outline-info"
            onClick={handlesubmit}
            >
            Submit
            </button>
            </div>

    
        </form>
        <div>
            {localStorage.getItem("name")}
        </div>
    
    </>
    );
  };



