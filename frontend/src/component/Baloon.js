import React from 'react'
import {  useNavigate } from 'react-router-dom'


export default function Baloon() {
    const navigate = useNavigate();

    const handlesubmit = ()=>{ 
        navigate("/");
        localStorage.clear();
      }
      const baloon = ()=>{ 
        var element = document.getElementById("balloon");
        element.classList.add("inflated");
      }
    
  return (
    <>
        <div className='div1Body'>
            <div id='div1' className='w-50 mt-5 d-flex justify-content-center border border-3 border-danger-subtle p-5 rounded-4 shadow-lg'>
                <div  id="balloon"  onClick={baloon}></div>
            </div>
        </div>
            <div id='div2' className='mt-5'>
            <div >
            <h1 >Happy Birthday {localStorage.getItem("name")}</h1>
        </div>
         <div>
            <button className='btn btn-warning' onClick={handlesubmit}>Back</button>
           
         </div>
         <div>
         <p>Click on Baloon</p>
         </div>
        </div>

    </>
  )
}
